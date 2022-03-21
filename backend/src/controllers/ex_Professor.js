/**
 * professor 테이블에 대한 CRUD 기능을 수행하는 Restful API
 */

/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const logger = require("../../helper/LogHelper");
const regexHelper = require("../../helper/RegexHelper");
const utilHelper = require("../../helper/UtilHelper");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 전체 목록 조회 --> Read(SELECT) */
  router.get("/professor", async (req, res, next) => {
    //검색어 파라미터 받기 -> 검색어가 없을 경우 전체 목록 조회이므로 유효성검사 안함.
    const query = req.get("query");

    // 현재 페이지 번호 받기 (기본값은 1)
    const page = req.get("page", 1);

    // 한 페이지에 보여질 목록 수 받기(기본값은 10, 최소 10, 최대 30)
    const rows = req.get("rows", 10);

    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;
    let pagenation = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 전체 데이터 수를 조회
      let sql1 = "SELECT COUNT(*) 'cnt' FROM professor";
      let args1 = [];

      if (query != null) {
        sql1 += " WHERE position LIKE concat('%', ?, '%')";
        args1.push(query);
      }

      const [result1] = await dbcon.query(sql1, args1);
      const totalCount = result1[0].cnt;

      // 페이지번호 정보를 계산한다.
      pagenation = utilHelper.pagenation(totalCount, page, rows);
      logger.debug(JSON.stringify(pagenation));

      // 데이터 조회
      let sql2 =
        "SELECT profno, name, userid, position, sal, hiredate, comm, p.deptno, d.dname FROM professor p, department d WHERE p.deptno=d.deptno";

      // SQL문에 설정할 치환값
      let args2 = [];

      if (query != null) {
        sql2 += " and position LIKE concat('%', ?, '%')";
        args2.push(query);
      }

      sql2 += " LIMIT ?, ?";
      args2.push(pagenation.offset);
      args2.push(pagenation.listCount);

      const [result2] = await dbcon.query(sql2, args2);

      // 조회 결과를 미리 준비한 변수에 저장함
      json = result2;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 처리에 성공했으므로 정상 조회 결과 구성
    res.sendJson({ pagenation, item: json });
  });

  /** 특정 항목에 대한 상세 조회 --> Read(SELECT) */
  router.get("/professor/:profno", async (req, res, next) => {
    const profno = req.get("profno");
    if (profno === null) {
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
        "SELECT profno, name, userid, position, sal, hiredate, comm, p.deptno, d.dname FROM professor p, department d WHERE p.deptno=d.deptno and profno=?";
      const [result] = await dbcon.query(sql, [profno]);

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
  router.post("/professor", async (req, res, next) => {
    // 저장을 위한 파라미터 입력받기
    const name = req.post("name");
    const userid = req.post("userid");
    const position = req.post("position");
    const sal = req.post("sal");
    const hiredate = req.post("hiredate");
    const comm = req.post("comm");
    const deptno = req.post("deptno");

    try {
      regexHelper.value(name, "교수이름이 없습니다.");
      regexHelper.value(userid, "아이디가 없습니다.");
      regexHelper.value(position, "직급이 없습니다.");
      regexHelper.value(sal, "급여가 없습니다.");
      regexHelper.value(hiredate, "입사일 없습니다.");
      regexHelper.value(deptno, "소속학과 번호가 없습니다.");
      regexHelper.maxLength(name, 50, "이름이 너무 깁니다.");
      regexHelper.maxLength(userid, 50, "아이디가 너무 깁니다.");
      regexHelper.maxLength(position, 20, "직급이 너무 깁니다.");
    } catch (err) {
      return next(err);
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
        "INSERT INTO professor (name, userid, position, sal, hiredate, comm, deptno) VALUES (?, ?, ?, ?, ?, ?, ?)";
      const input_data = [name, userid, position, sal, hiredate, comm, deptno];
      const [result1] = await dbcon.query(sql, input_data);

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 = "SELECT * FROM professor WHERE profno=?";
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
  router.put("/professor/:profno", async (req, res, next) => {
    const profno = req.get("profno");
    const name = req.post("name");
    const userid = req.post("userid");
    const position = req.post("position");
    const sal = req.post("sal");
    const hiredate = req.post("hiredate");
    const comm = req.post("comm");
    const deptno = req.post("deptno");

    try {
      regexHelper.value(name, "교수이름이 없습니다.");
      regexHelper.value(userid, "아이디가 없습니다.");
      regexHelper.value(position, "직급이 없습니다.");
      regexHelper.value(sal, "급여가 없습니다.");
      regexHelper.value(hiredate, "입사일 없습니다.");
      regexHelper.value(deptno, "소속학과 번호가 없습니다.");
      regexHelper.maxLength(name, 50, "이름이 너무 깁니다.");
      regexHelper.maxLength(userid, 50, "아이디가 너무 깁니다.");
      regexHelper.maxLength(position, 20, "직급이 너무 깁니다.");
    } catch (err) {
      return next(err);
    }

    function foundNull() {
      [profno, name, userid, position, sal, hiredate, deptno].forEach((v) => {
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
      const sql =
        "UPDATE professor SET name=?, userid=?, position=?, sal=?, hiredate=?, comm=?, deptno=? WHERE profno=?";
      const input_data = [
        name,
        userid,
        position,
        sal,
        hiredate,
        comm,
        deptno,
        profno,
      ];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 = "SELECT * FROM professor WHERE profno=?";
      const [result2] = await dbcon.query(sql2, [profno]);

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
  router.delete("/professor/:profno", async (req, res, next) => {
    const profno = req.get("profno");

    if (profno === null) {
      return next(new Error(400));
    }

    /** 데이터 삭제하기 */
    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 자식데이터 null 주기
      await dbcon.query("UPDATE student SET profno=null WHERE profno=?", [
        profno,
      ]);

      // 데이터 삭제하기
      const sql = "DELETE FROM professor WHERE profno=?";
      const [result1] = await dbcon.query(sql, [profno]);

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
