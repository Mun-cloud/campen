/**
 * @Filename : FileUpload.js
 * @Author : 문태호
 * @Description : 파일 업로드 라우팅
 */

module.exports = (app) => {
  const router = require("express").Router();
  const config = require("../../helper/_config");
  const logger = require("../../helper/LogHelper");
  const fileHelper = require("../../helper/FileHelper");
  const aws = require("aws-sdk");

  const path = require("path");

  const multer = require("multer"); // 업로드 모듈
  const multerS3 = require("multer-s3");

  /** multer 객체 설정 --> 파일 제한 : 5개 ,20M */
  const s3 = new aws.S3({
    credentials: {
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_SECRET,
      region: process.env.AWS_REGION,
    },
  });

  /** 업로드 된 파일이 저장될 파일명 설정 */
  const key = (req, file, callback) => {
    // 파일의 확장자만 추출 --> .png
    const extName = path.extname(file.originalname);
    // 파일이 저장될 이름 (현재시각)
    const saveName = new Date().getTime().toString() + extName.toLowerCase();
    // 업로드 정보에 백엔드의 업로드 파일 이름을 추가한다.
    file.savename = saveName;
    // 업로드 정보에 파일에 접근할 수 있는 URL값 추가(local storage 용도)
    file.url = path.join("/upload", saveName).replace(/\\/gi, "/");
    // 구성된 정보를 req 객체에 추가
    if (req.file instanceof Array) {
      req.file.push(file);
    } else {
      req.file = file;
    }
    callback(null, saveName);
  };

  // 게시글 이미지 업로드를 위한 AWS S3 multer storage config object
  const imageUploader = multerS3({
    s3: s3,
    bucket: "campen/contentsimg",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    Condition: {
      StringEquals: {
        "s3:x-amz-acl": ["public-read"],
      },
    },
    key: key,
  });

  // 유저 프로필 이미지 업로드를 위한 AWS S3 multer storage config object
  const userPhotoUploader = multerS3({
    s3: s3,
    bucket: "campen/userphoto",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    /** 업로드 된 파일이 저장될 파일명 설정 */
    Condition: {
      StringEquals: {
        "s3:x-amz-acl": ["public-read"],
      },
    },
    key: key,
  });

  /** 업로드 될 파일의 확장자 제한 */
  const fileFilter = (req, file, callback) => {
    // 파일의 종류 얻기
    let mimetype = file.mimetype;

    // 파일 종류 문자열에 "image/"가 포함되어 있지 않은 경우
    if (mimetype.indexOf("image/") == -1) {
      const err = new Error();
      err.result_code = 500;
      err.result_msg = "이미지 파일만 업로드 가능합니다.";
      return callback(err);
    }
    callback(null, true);
  };

  const contentsMulter = multer({
    storage: imageUploader,
    /** 최대 업로드 파일 수, 용량 제한 설정 */
    limits: {
      files: config.upload.max_count,
      fileSize: config.upload.max_size, // 5메가
    },
    fileFilter: fileFilter,
  });

  const userMulter = multer({
    storage: userPhotoUploader,
    /** 최대 업로드 파일 수, 용량 제한 설정 */
    limits: {
      files: config.upload.max_count,
      fileSize: config.upload.max_size, // 5메가
    },
    fileFilter: fileFilter,
  });

  // 싱글파일 업로드(유저 프로필 이미지 업로드용)
  router.route("/upload/simple").post((req, res, next) => {
    // name속성값이 myphoto인 경우, 업로드를 수행.
    const upload = userMulter.single("photo");

    upload(req, res, async (err) => {
      // 응답 코드 설정
      let result_code = 200;
      let result_msg = "ok";

      if (err) {
        if (err instanceof multer.MulterError) {
          switch (err.code) {
            case "LIMIT_FILE-COUNT":
              err.result_code = 500;
              err.result_msg = "업로드 가능한 파일의 수를 초과했습니다.";
              break;
            case "LIMIT_FILE-SIZE":
              err.result_code = 500;
              err.result_msg = "업로드 가능한 파일의 용량을 초과했습니다.";
              break;
            default:
              err.result_code = 500;
              err.result_msg = "알 수 없는 에러가 발생했습니다.";
              break;
          }
        }
        logger.error(err);
        result_code = err.result_code;
        result_msg = err.result_msg;
      }

      const result = {
        rt: result_code,
        rtmsg: result_msg,
        item: req.file,
      };
      res.status(result_code).send(result);
    });
  });

  // 멀티파일 업로드(게시글 이미지 업로드용)
  router.route("/upload/multiple").post((req, res, next) => {
    // 요청정보 안에 업로드된 파일의 정보를 저장할 빈 배열을 준비
    req.file = [];

    // name속성이 myphoto이고 multiple 속성이 부여된 다중 업로드를 처리
    const upload = contentsMulter.array("photo");

    upload(req, res, (err) => {
      let result_code = 200;
      let result_msg = "ok";

      if (err) {
        console.log("에러발생", err);
        if (err instanceof multer.MulterError) {
          switch (err.code) {
            case "LIMIT_FILE-COUNT":
              err.result_code = 500;
              err.result_msg = "업로드 가능한 파일의 수를 초과했습니다.";
              break;
            case "LIMIT_FILE-SIZE":
              err.result_code = 500;
              err.result_msg = "업로드 가능한 파일의 용량을 초과했습니다.";
              break;
            default:
              err.result_code = 500;
              err.result_msg = "알 수 없는 에러가 발생했습니다.";
              break;
          }
        }
        logger.error(err);
        result_code = err.result_code;
        result_msg = err.result_msg;
      }

      const result = {
        rt: result_code,
        rtmsg: result_msg,
        item: req.files,
      };
      res.send(result);
    });
  });
  return router;
};
