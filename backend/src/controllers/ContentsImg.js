/**
 * @ Filename : ContentImg.js
 * @ Author : 문태호
 * @ Description : contents-img 테이블에 대한 CRUD 기능을 수행하는 Restful API
 */

/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const regexHelper = require("../../helper/RegexHelper");
const BadRequestException = require("../../exceptions/BadRequestException");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 데이터 추가 --> Create(INSERT) */
  router.post("/contents/img", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }
    // 저장을 위한 파라미터 입력받기
    const src = req.post("src");
    const contentId = req.post("contentId");

    // null값 에러처리
    function foundNull() {
      [src, contentId].forEach((v) => {
        if (v === null) {
          return false;
        }
      });
    }

    if (!foundNull) {
      return next(new BadRequestException());
    }

    /** 데이터 저장하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();
      src.forEach(async (v) => {
        console.log(v);
        // 데이터 저장하기
        const sql = "INSERT INTO `contents-img` VALUES (null, ?, now(), ?)";
        const input_data = [v.location, contentId];
        const [result1] = await dbcon.query(sql, input_data);
      });

      // 조회 결과를 미리 준비한 변수에 저장함
      json = "이미지 등록 완료";
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  return router;
};
