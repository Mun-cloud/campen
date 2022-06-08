/**
 * @Filename : Comments.js
 * @Author : 문태호
 * @Description : comments 테이블에 대한 CRUD 기능을 수행하는 Restful API
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

  /** 전체 목록 조회 --> Read(SELECT) */
  router.get("/comments", async (req, res, next) => {
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      let sql2 =
        "SELECT id, comment, reg_date, edit_date, members_id, contents_id FROM comments";

      const [result2] = await dbcon.query(sql2);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result2;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** members Id 조회 --> Read(SELECT) */
  router.get("/comments/members/:memberId", async (req, res, next) => {
    const id = req.get("memberId");
    if (id === null) {
      return next(new Error(400));
    }

    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      const sql =
        "SELECT id, comment, reg_date, edit_date, members_id, contents_id FROM comments WHERE members_id=?";
      const [result] = await dbcon.query(sql, [id]);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** contents Id 조회 --> Read(SELECT) */
  router.get("/comments/contents/:contentId", async (req, res, next) => {
    const id = req.get("contentId");
    if (id === null) {
      return next(new Error(400));
    }

    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      const sql =
        "SELECT c.id, c.comment, c.reg_date, c.edit_date, members_id, contents_id, m.nickname, m.photo FROM comments c, members m WHERE c.members_id=m.id and contents_id=?";
      const [result] = await dbcon.query(sql, [id]);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** 데이터 추가 --> Create(INSERT) */
  router.post("/comments", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }
    // 저장을 위한 파라미터 입력받기
    const comment = req.post("comment");
    const membersId = req.post("membersId");
    const contentsId = req.post("contentsId");

    function foundNull() {
      [comment, membersId, contentsId].forEach((v) => {
        if (v === null) {
          return false;
        }
      });
    }

    if (!foundNull) {
      return next(new BadRequestException("전송값에 오류가 있습니다."));
    }

    /** 데이터 저장하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 저장하기
      const sql = "INSERT INTO comments VALUES (null, ?, now(), now(), ?, ?)";
      const input_data = [comment, membersId, contentsId];
      const [result1] = await dbcon.query(sql, input_data);

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 =
        "SELECT id, comment, reg_date, edit_date, members_id, contents_id FROM comments WHERE id=?";
      const [result2] = await dbcon.query(sql2, [result1.insertId]);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result2;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** 데이터 수정 --> Update(UPDATE) */
  router.put("/comments/:id", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }

    const id = req.get("id");
    const comment = req.post("comment");

    function foundNull() {
      [id, comment].forEach((v) => {
        if (v === null) {
          return false;
        }
      });
    }

    if (!foundNull) {
      return next(new Error(400));
    }

    /** 데이터 수정하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 수정하기
      const sql = "UPDATE comments SET comment=?, edit_date=now() WHERE id=?";
      const input_data = [comment, id];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 =
        "SELECT id, comment, reg_date, edit_date, members_id, contents_id FROM comments WHERE id=?";
      const [result2] = await dbcon.query(sql2, [id]);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result2;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** 데이터 삭제 --> Delete(DELETE) */
  router.delete("/comments", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }

    const id = req.delete("id");

    if (id === null) {
      return next(new Error(400));
    }

    /** 데이터 삭제하기 */
    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 삭제하기
      const sql = "DELETE FROM comments WHERE id=?";
      const [result1] = await dbcon.query(sql, [id]);

      json = result1;
      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("삭제된 데이터가 없습니다.");
      }
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
