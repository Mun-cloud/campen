/**
 * @Filename : Exhibition.js
 * @Author : 문태호
 * @Description : exhibition 테이블에 대한 CRUD 기능을 수행하는 Restful API
 */

/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const BadRequestException = require("../../exceptions/BadRequestException");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");
/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 기획전 전체 조회 --> Read(SELECT) */
  router.get("/exhi", async (req, res, next) => {
    let item = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      const sql2 =
        "SELECT id, photo, title, sub, reg_date, edit_date FROM exhibition";

      const [result2] = await dbcon.query(sql2);

      // 조회 결과를 미리 준비한 변수에 저장함
      item = result2;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item });
  });

  /** 특정 항목에 대한 상세 조회 --> Read(SELECT) */
  router.get("/exhi/:id", async (req, res, next) => {
    const id = req.get("id");
    if (id === null) {
      return next(new Error(400));
    }

    // 데이터 조회 결과가 저장될 빈 변수
    let item = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      const sql =
        "SELECT e.id, e.photo, e.title, c.id campId, c.name name, c.lineIntro lineIntro, cast(c.photo as char(10000)) campPhoto, c.lctCl FROM exhibition e, `exhibition-list` l, camp c where e.id=l.exhibition_id and l.camp_id=c.id and e.id=?";
      const [result] = await dbcon.query(sql, [id]);

      // 조회 결과를 미리 준비한 변수에 저장함
      item = result;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item });
  });

  return router;
};
