const multer = require("multer");
const path = require("path");
const logger = require("./LogHelper");
const config = require("./_config");
const fileHelper = require("./FileHelper");
const nodemailer = require("nodemailer");

module.exports = () => {
  return (req, res, next) => {
    /** GET,URL,POST,PUT,DELETE 파라미터를 수신하여 값을 리턴하는 함수 */
    req._getParam = (method, key, def = null) => {
      // 파라미터를 HTTP 전송방식에 따라 받는다.
      let value = null;
      // 1) undefined인 경우 def값으로 대체
      // --> 파라미터를 받지만 빈 문자열이거나 공백으로만 구성된 경우는 걸러내지 못한다.
      if (method.toUpperCase() === "GET") {
        value = req.query[key] || req.params[key] || def;
      } else {
        value = req.body[key] || def;
      }

      if (value === undefined) {
        value = def;
      }

      // 2) 빈 문자열이거나 공백인 경우 걸러내기
      if (value !== null && typeof value == "string") {
        value = value.trim();

        if (value.length === 0) {
          value = def;
        }
      }

      logger.debug("[HTTP %s Params] %s=%s", method, key, value);
      return value;
    };

    /** get 파라미터 수신 함수 --> _get_param 함수를 호출한다. */
    req.get = function (key, def) {
      return this._getParam("GET", key, def);
    };

    /** post 파라미터 수신 함수 --> _get_param 함수를 호출한다. */
    req.post = function (key, def) {
      return this._getParam("POST", key, def);
    };

    /** put 파라미터 수신 함수 --> _get_param 함수를 호출한다. */
    req.put = function (key, def) {
      return this._getParam("PUT", key, def);
    };

    /** delete 파라미터 수신 함수 --> _get_param 함수를 호출한다. */
    req.delete = function (key, def) {
      return this._getParam("DELETE", key, def);
    };

    /** 프론트엔드에게 JSON결과를 출력하는 기능 */
    res.sendResult = (statusCode, message, data) => {
      const json = {
        rt: statusCode,
        rtmsg: message,
      };

      if (data !== undefined) {
        for (const key in data) {
          json[key] = data[key];
        }
      }

      json.pubdate = new Date().toISOString();
      res.status(statusCode).send(json);
    };

    /** 결과가 200(OK) 인 경우에 대한 JSON 출력 */
    res.sendJson = (data) => {
      res.sendResult(200, "OK", data);
    };

    /** 에러처리 출력 */
    res.sendError = (error) => {
      logger.error(error.name);
      logger.error(error.message);
      logger.error(error.stack);
      res.sendResult(error.statusCode, error.message);
    };

    /** 메일 발송 */
    res.sendMail = async (to, subject, html) => {
      /* 발송에 필요한 서버 정보를 사용하여 발송객체 생성 */
      const smtp = nodemailer.createTransport(config.sendmail_info);

      /** 4) 메일발송 요청 */
      try {
        await smtp.sendMail({
          from: "문태호 <mun05170@gmail.com>",
          to,
          subject,
          html,
        });
      } catch (err) {
        // 이 함수(res.sendMail)를 호출한 곳으로 에러를 전달
        throw err;
      }
    };

    /** 업로드 초기화 */
    req.getMultipart = () => {
      const multipart = multer({
        storage: multer.diskStorage({
          /** 업로드 된 파일이 저장될 디렉토리 설정 */
          // req는 요청정보, file은 최종적으로 업로드 된 결과 데이터가 저장되어있을 객체
          destination: (req, file, callback) => {
            // 폴더 생성
            fileHelper.mkdirs(config.upload.dir);
            fileHelper.mkdirs(config.thumbnail.dir);

            // 업로드 정보에 백엔드의 업로드 파일 저장 폴더 위치를 추가한다.
            file.dir = config.upload.dir.replace(/\\/gi, "/");

            // multer 객체에게 업로드 경로를 전달.
            callback(null, config.upload.dir);
          },
          /** 업로드 된 파일이 저장될 파일명 설정 */
          // file.originalname 변수에 파일이름이 저장되어 있다. ex) helloworld.png
          filename: (req, file, callback) => {
            // 파일의 확장자만 추출 --> .png
            const extName = path.extname(file.originalname);
            // 파일이 저장될 이름 (현재시각)
            const saveName =
              new Date().getTime().toString() + extName.toLocaleLowerCase();
            // 업로드 정보에 백엔드의 업로드 파일 이름을 추가한다.
            file.savename = saveName;
            file.path = path.join(file.dir, saveName);
            // 업로드 정보에 파일에 접근할 수 있는 URL값 추가
            file.url = path.join("/upload", saveName).replace(/\\/gi, "/");
            // 구성된 정보를 req 객체에 추가
            if (req.file instanceof Array) {
              req.file.push(file);
            } else {
              req.file = file;
            }
            callback(null, saveName);
          },
        }),
        /** 최대 업로드 파일 수, 용량 제한 설정 */
        limits: {
          files: 5,
          fileSize: 1024 * 1024 * 20, // 20메가
        },
        /** 업로드 될 파일의 확장자 제한 */
        fileFilter: (req, file, callback) => {
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
        },
      });
      return multipart;
    };

    next();
  };
};
