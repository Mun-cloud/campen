/**
 * @ Filename : Content.js
 * @ Author : 문태호
 * @ Description : contents 테이블에 대한 CRUD 기능을 수행하는 Restful API
 */

/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const regexHelper = require("../../helper/RegexHelper");
const BadRequestException = require("../../exceptions/BadRequestException");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");
const axios = require("axios");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 게시글 전체 목록 조회 --> Read(SELECT) */
  router.get("/content", async (req, res, next) => {
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 조회
      let sql1 =
        "SELECT c.id, c.tab, i.src, cast(c.content as char(10000)) content, views, c.reg_date, c.edit_date, members_id, m.nickname, m.user_name, m.photo userPhoto, camp_id, likes, commentsCount FROM contents c ";
      // 대표이미지 조회
      sql1 +=
        "LEFT OUTER JOIN (select src, `contents-img`.contents_id from `contents-img` inner join (select min(id) id, contents_id from `contents-img` group by contents_id) g on `contents-img`.id=g.id) i ON c.id=i.contents_id ";
      // 좋아요 수 조회
      sql1 +=
        "LEFT OUTER JOIN (SELECT count(members_id) likes, contents_id FROM `contents-likes` group by contents_id) l ON c.id=l.contents_id ";
      // 댓글 수 조회
      sql1 +=
        "LEFT OUTER JOIN (SELECT count(id) commentsCount, contents_id FROM comments group by contents_id) k ON c.id=k.contents_id ";
      // 작성자 조회
      sql1 += "inner join members m ON c.members_id=m.id order by id desc";

      const [result1] = await dbcon.query(sql1);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result1;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** query값에 따른 최신 캠핑한컷 응답 --> Read(SELECT) */
  router.get("/content/photo", async (req, res, next) => {
    const query = req.get("query");
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 최근데이터 조회(대표이미지 포함) select문
      let sql1 =
        "SELECT c.id, g.src, m.nickname, m.id memberId FROM contents c, members m, `contents-img` g,  (select min(id) id, contents_id from `contents-img` group by contents_id) i WHERE c.id=i.contents_id and g.id=i.id and c.members_id=m.id and c.tab=0 order by id desc";

      let args1 = [];
      // query값에 따른 출력 데이터 수 조절
      if (query) {
        sql1 += " limit 0, ?";
        args1.push(parseInt(query));
      }

      const [result1] = await dbcon.query(sql1, args1);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result1;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** query값에 따른 최신 캠핑로그 응답 --> Read(SELECT) */
  router.get("/content/log", async (req, res, next) => {
    const query = req.get("query");
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 최근데이터 조회(대표이미지 포함) select문
      let sql1 =
        "SELECT c.id, cast(c.content as char(10000)) content, g.src, m.nickname, m.id memberId FROM contents c, members m, `contents-img` g,  (select min(id) id, contents_id from `contents-img` group by contents_id) i WHERE c.id=i.contents_id and g.id=i.id and c.members_id=m.id and c.tab=1 order by id desc";

      let args1 = [];
      if (query) {
        sql1 += " limit 0, ?";
        args1.push(parseInt(query));
      }

      const [result1] = await dbcon.query(sql1, args1);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result1;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ item: json });
  });

  /** contents 상세조회 --> Read(SELECT) */
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
        "SELECT c.id, c.tab, cast(c.content as char(10000)) content, views, c.reg_date, c.edit_date, members_id, m.nickname, m.user_name, m.photo userPhoto, (SELECT count(*) cnt FROM `contents-likes` where contents_id=" +
        id +
        ") likes FROM contents c, members m WHERE c.members_id=m.id and c.id=?";
      const [result] = await dbcon.query(sql, [id]);

      const sql2 =
        "SELECT id, src, reg_date, contents_id FROM `contents-img` WHERE contents_id=?";
      const [result2] = await dbcon.query(sql2, [id]);

      const sql3 = "UPDATE contents SET views = IFNULL(views,0)+1 WHERE id=?";
      const [result3] = await dbcon.query(sql3, result[0].id);

      json = result[0];
      json.photos = result2;
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
    // 로그인 에러처리
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }
    // 저장을 위한 파라미터 입력받기
    const tab = req.post("tab");
    const content = req.post("content");
    const memberId = req.post("memberId");

    // null값 예외처리
    function foundNull() {
      [tab, content, memberId].forEach((v) => {
        if (v === null) {
          return false;
        }
      });
    }

    if (!foundNull) {
      return next(new BadRequestException("입력값이 올바르지 않습니다."));
    }

    /** 데이터 저장하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 저장하기
      const sql =
        "INSERT INTO contents VALUES (null, ?, ?, 0, now(), now(), ?, null)";
      const input_data = [tab, content, memberId];
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
    // 로그인 에러처리
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }
    const id = req.get("id");
    const tab = req.put("tab");
    const content = req.put("content");
    const memberId = req.put("memberId");

    // null값 에러처리
    function foundNull() {
      [id, tab, content, memberId].forEach((v) => {
        if (v === null) {
          return false;
        }
      });
    }

    if (!foundNull) {
      return next(new BadRequestException("입력사항이 올바르지 않습니다."));
    }

    /** 데이터 수정하기 */
    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 데이터 수정하기
      const sql = "UPDATE contents SET content=?, edit_date=now() WHERE id=?";
      const input_data = [content, id];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 =
        "SELECT id, tab, cast(content as char(10000)) as content, views, reg_date, edit_date, members_id, camp_id FROM contents WHERE id=?";
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
  router.delete("/content", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }
    const id = req.delete("id");

    if (id === null) {
      return next(new BadRequestException("잘못된 경로입니다."));
    }

    /** 데이터 삭제하기 */
    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 자식데이터 삭제
      await dbcon.query("DELETE FROM `contents-img` WHERE contents_id=?", [id]);
      await dbcon.query("DELETE FROM `contents-likes` WHERE contents_id=?", [
        id,
      ]);
      await dbcon.query("DELETE FROM comments WHERE contents_id=?", [id]);

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
