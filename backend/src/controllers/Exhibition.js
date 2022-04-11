/**
 * camp 테이블에 대한 CRUD 기능을 수행하는 Restful API
 */

/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const logger = require("../../helper/LogHelper");
const regexHelper = require("../../helper/RegexHelper");
const utilHelper = require("../../helper/UtilHelper");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");
const axios = require("axios");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 전체 목록 조회(페이지번호 구현) --> Read(SELECT) */
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
        "SELECT e.id, e.photo, c.id campId, c.name name, c.lineIntro lineIntro  FROM exhibition e, `exhibition-list` l, camp c where e.id=l.exhibition_id and l.camp_id=c.id and e.id=?";
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

  /** 데이터 추가 --> Create(INSERT) */
  router.get("/getcamp", async (req, res, next) => {
    // 저장을 위한 파라미터 입력받기
    // const dname = req.post("dname");
    // const loc = req.post("loc");

    /** Ajax 파라미터 정리 및 axios */
    const APIurl =
      "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList";
    const KEY =
      "5APlXd7ZkPeuONbcZe2isYf2o238wB9owyYEmdkJEV7AeGwMGLtF2cB2ku18d/iA5dcfs9UX/wA+qck++FPT3A==";

    const urlParams = {
      params: {
        ServiceKey: KEY,
        pageNo: "1",
        numOfRows: "100",
        MobileOS: "ETC",
        MobileApp: "AppTest",
      },
    };

    // 캠핑장 리스트 저장 배열
    let campOriginData = [];
    try {
      const response = await axios.get(APIurl, urlParams);
      campOriginData = response.data.response.body.items;
    } catch (err) {
      console.error(err);
    }
    // try {
    //   regexHelper.value(dname, "학과이름이 없습니다.");
    //   regexHelper.maxLength(dname, 10, "학과이름이 너무 깁니다.");
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
      /** induty 일반캠핑장, 오토캠핑장, 글램핑 구분 데이터 추가.. */
      campOriginData.item.forEach(async (v) => {
        const sql =
          "INSERT INTO `camp` (contentId, name, addr1, addr2, tel, lctCl, price, photo, basic_fac, add_fac, lineIntro, intro, tag, mapX, mapY, homepage, manner_start, manner_end, policy, map, is_reg, reg_date, edit_date) VALUES (?, ?, ?, ?, ?, ?, null, ?, ?, ?, ?, ?, null, ?, ?, ?, null, null, null, null, 'N', now(), now())";
        const input_data = [
          v.contentId,
          v.facltNm,
          v.addr1,
          v.addr2,
          v.tel,
          v.lctCl,
          v.firstImageUrl,
          v.sbrsCl,
          v.posblFcltyCl,
          v.lineIntro,
          v.intro,
          v.mapX,
          v.mapY,
          v.homepage,
        ];
        const [result1] = await dbcon.query(sql, input_data);
        // // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
        // const sql2 = "SELECT deptno, dname, loc FROM department WHERE deptno=?";
        // const [result2] = await dbcon.query(sql2, [result1.insertId]);
      });
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.send("OK");
  });

  /** 데이터 수정 --> Update(UPDATE) */
  router.put("/campdata/:put/:id", async (req, res, next) => {
    const id = req.get("id");
    const put = req.get("put");
    const input = req.post("input");

    if (id === null || put == null || input == null) {
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
      const sql = "UPDATE camp SET `" + put + "`=?, edit_date=now() WHERE id=?";
      const input_data = [input, id];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 =
        "SELECT id, contentId, name, addr1, addr2, tel, lctCl, price, cast(photo as char(10000)) as photo, `basic_fac`, `add_fac`, lineIntro ,cast(intro as char(10000))as intro, cast(tag as char(10000)) as tag, mapX, mapY, cast(homepage as char(10000)) as homepage, `manner_start`, `manner_end`, policy, map, is_reg, reg_date, edit_date FROM camp WHERE id=?";
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
  router.delete("/camp/:id", async (req, res, next) => {
    const id = req.get("id");

    if (id === null) {
      return next(new Error(400));
    }

    /** 데이터 삭제하기 */
    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 삭제하고자 하는 원 데이터를 참조하는 자식 데이터를 먼저 삭제해야 한다.
      // 만약 자식데이터를 유지해야 한다면 참조키 값을 null로 업데이트 해야 한다.
      // 단, 자식 데이터는 결과행 수가 0이더라도 무시한다.
      await dbcon.query(
        "UPDATE exhibition-list SET null, edit_date=now() WHERE id=?",
        [id]
      );
      await dbcon.query(
        "UPDATE contents SET null, edit_date=now() WHERE id=?",
        [id]
      );
      await dbcon.query("UPDATE hearts SET null, edit_date=now() WHERE id=?", [
        id,
      ]);

      // 데이터 삭제하기
      const sql = "DELETE FROM camp WHERE id=?";
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
