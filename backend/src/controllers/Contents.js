/**
 * contents 테이블에 대한 CRUD 기능을 수행하는 Restful API
 */

/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const logger = require("../../helper/LogHelper");
const regexHelper = require("../../helper/RegexHelper");
const BadRequestException = require("../../exceptions/BadRequestException");
const utilHelper = require("../../helper/UtilHelper");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 전체 목록 조회 --> Read(SELECT) */
  router.get("/content", async (req, res, next) => {
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      let sql2 =
        "SELECT c.id, c.tab, cast(c.content as char(10000)) content, views, c.reg_date, c.edit_date, members_id, m.nickname, m.user_name, camp_id FROM contents c, members m where c.members_id=m.id";

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

  /** 항목별 분류 조회 --> Read(SELECT) */
  router.get("/content/:id", async (req, res, next) => {
    const id = req.get("id");
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
        "SELECT c.id, c.tab, cast(c.content as char(10000)) content, views, c.reg_date, c.edit_date, members_id, m.nickname, m.user_name, camp_id FROM contents c, members m WHERE c.members_id=m.id and c.id=?";
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
  router.post("/content", async (req, res, next) => {
    // if (!req.session.memberInfo) {
    //   return next(new BadRequestException("로그인중이 아닙니다."));
    // }
    // 저장을 위한 파라미터 입력받기
    const tab = req.post("tab");
    const content = req.post("content");

    // try {
    //   regexHelper.value(name, "교수이름이 없습니다.");
    //   regexHelper.value(userid, "아이디가 없습니다.");
    //   regexHelper.value(position, "직급이 없습니다.");
    //   regexHelper.value(sal, "급여가 없습니다.");
    //   regexHelper.value(hiredate, "입사일 없습니다.");
    //   regexHelper.value(deptno, "소속학과 번호가 없습니다.");
    //   regexHelper.maxLength(name, 50, "이름이 너무 깁니다.");
    //   regexHelper.maxLength(userid, 50, "아이디가 너무 깁니다.");
    //   regexHelper.maxLength(position, 20, "직급이 너무 깁니다.");
    // } catch (err) {
    //   return next(err);
    // }

    /** 데이터 저장하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 저장하기
      const sql =
        "INSERT INTO contents VALUES (null, ?, ?, 0, now(), now(), null, null)";
      const input_data = [tab, content];
      const [result1] = await dbcon.query(sql, input_data);

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 =
        "SELECT id, tab, cast(content as char(10000)) as content, views, reg_date, edit_date, members_id, camp_id FROM contents WHERE id=?";
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
  router.put("/content/:id", async (req, res, next) => {
    // id, tab, content, views, reg_date, edit_date, members_id, camp_id;
    const id = req.get("id");
    const content = req.post("content");

    // try {
    //   regexHelper.value(name, "교수이름이 없습니다.");
    //   regexHelper.value(userid, "아이디가 없습니다.");
    //   regexHelper.value(position, "직급이 없습니다.");
    //   regexHelper.value(sal, "급여가 없습니다.");
    //   regexHelper.value(hiredate, "입사일 없습니다.");
    //   regexHelper.value(deptno, "소속학과 번호가 없습니다.");
    //   regexHelper.maxLength(name, 50, "이름이 너무 깁니다.");
    //   regexHelper.maxLength(userid, 50, "아이디가 너무 깁니다.");
    //   regexHelper.maxLength(position, 20, "직급이 너무 깁니다.");
    // } catch (err) {
    //   return next(err);
    // }

    function foundNull() {
      [id, content].forEach((v) => {
        if (v === null || v === "") {
          return false;
        }
      });
    }

    if (!foundNull()) {
      return next(new BadRequestException("게시글의 내용을 입력해 주십시오."));
    }

    /** 데이터 수정하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 수정하기
      const sql = "UPDATE contents SET content=? WHERE id=?";
      const input_data = [content, id];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 = "SELECT * FROM contents WHERE id=?";
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
  router.delete("/content/:id", async (req, res, next) => {
    const id = req.get("id");

    if (id === null) {
      return next(new BadRequestException("잘못된 경로입니다."));
    }

    /** 데이터 삭제하기 */
    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 자식데이터 삭제
      await dbcon.query("DELETE FROM `contents-href` WHERE 'contents_id'=?", [
        id,
      ]);
      await dbcon.query("DELETE FROM `contents-likes` WHERE 'contents_id'=?", [
        id,
      ]);

      // 자식데이터 null 주기
      await dbcon.query(
        "UPDATE `contents-comments` SET `contents_id`=null WHERE 'contents_id'=?",
        [id]
      );

      // 데이터 삭제하기
      const sql = "DELETE FROM contents WHERE id=?";
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
