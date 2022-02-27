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
  router.get("/student", async (req, res, next) => {
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

      let sql1 = "SELECT COUNT(*) 'cnt' FROM student s";
      let args1 = [];

      if (query != null) {
        sql1 += " WHERE s.deptno LIKE concat('%', ?, '%')";
        args1.push(query);
      }

      const [result1] = await dbcon.query(sql1, args1);
      const totalCount = result1[0].cnt;

      // 페이지전호 정보를 계산한다.
      pagenation = utilHelper.pagenation(totalCount, page, rows);
      logger.debug(JSON.stringify(pagenation));

      // 데이터 조회
      let sql2 =
        "SELECT studno, s.name, s.userid, grade, idnum, birthdate, tel, height, weight, s.deptno, d.dname, p.profno, p.name 'profname' FROM student s, department d, professor p WHERE s.deptno=d.deptno and s.profno=p.profno";
      let args2 = [];

      if (query != null) {
        sql2 += " and deptno LIKE concat('%', ?, '%')";
        args2.push(query);
      }

      sql2 += " LIMIT ?, ?";
      args2.push(pagenation.offset);
      args2.push(pagenation.listCount);

      const [result2] = await dbcon.query(sql2, args2);

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
  router.get("/student/:studno", async (req, res, next) => {
    const studno = req.get("studno");
    if (studno === null) {
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
        "SELECT studno, s.name, s.userid, grade, idnum, birthdate, tel, height, weight, s.deptno, d.dname, p.profno, p.name 'profname' FROM student s, department d, professor p WHERE s.deptno=d.deptno and s.profno=p.profno and studno=?";
      const [result] = await dbcon.query(sql, [studno]);

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
  router.post("/student", async (req, res, next) => {
    // 저장을 위한 파라미터 입력받기
    const name = req.post("name");
    const userid = req.post("userid");
    const grade = req.post("grade");
    const idnum = req.post("idnum");
    const birthdate = req.post("birthdate");
    const tel = req.post("tel");
    const height = req.post("height");
    const weight = req.post("weight");
    const deptno = req.post("deptno");
    const profno = req.post("profno");

    try {
      regexHelper.value(name, "학생이름이 없습니다.");
      regexHelper.value(userid, "아이디가 없습니다.");
      regexHelper.value(grade, "학년이 없습니다.");
      regexHelper.value(idnum, "주민번호가 없습니다.");
      regexHelper.value(birthdate, "생일 없습니다.");
      regexHelper.value(tel, "휴대폰 번호가 없습니다.");
      regexHelper.value(height, "키가 없습니다.");
      regexHelper.value(weight, "체중이 없습니다.");
      regexHelper.value(deptno, "소속학과 번호가 없습니다.");
      regexHelper.maxLength(name, 50, "이름이 너무 깁니다.");
      regexHelper.maxLength(userid, 50, "아이디가 너무 깁니다.");
      regexHelper.maxLength(idnum, 13, "주민번호가 너무 깁니다.");
      regexHelper.telphone(tel, "휴대폰 번호를 확인해주세요.");
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
        "INSERT INTO student VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const input_data = [
        name,
        userid,
        grade,
        idnum,
        birthdate,
        tel,
        height,
        weight,
        deptno,
        profno,
      ];
      const [result1] = await dbcon.query(sql, input_data);

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 = "SELECT * FROM student WHERE studno=?";
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
  router.put("/student/:studno", async (req, res, next) => {
    const studno = req.get("studno");
    const name = req.post("name");
    const userid = req.post("userid");
    const grade = req.post("grade");
    const idnum = req.post("idnum");
    const birthdate = req.post("birthdate");
    const tel = req.post("tel");
    const height = req.post("height");
    const weight = req.post("weight");
    const deptno = req.post("deptno");
    const profno = req.post("profno");

    try {
      regexHelper.value(name, "학생이름이 없습니다.");
      regexHelper.value(userid, "아이디가 없습니다.");
      regexHelper.value(grade, "학년이 없습니다.");
      regexHelper.value(idnum, "주민번호가 없습니다.");
      regexHelper.value(birthdate, "생일 없습니다.");
      regexHelper.value(tel, "휴대폰 번호가 없습니다.");
      regexHelper.value(height, "키가 없습니다.");
      regexHelper.value(weight, "체중이 없습니다.");
      regexHelper.value(deptno, "소속학과 번호가 없습니다.");
      regexHelper.maxLength(name, 50, "이름이 너무 깁니다.");
      regexHelper.maxLength(userid, 50, "아이디가 너무 깁니다.");
      regexHelper.maxLength(idnum, 13, "주민번호가 너무 깁니다.");
      regexHelper.telphone(tel, "휴대폰 번호를 확인해주세요.");
    } catch (err) {
      return next(err);
    }

    function foundNull() {
      [
        studno,
        name,
        userid,
        grade,
        idnum,
        birthdate,
        tel,
        height,
        weight,
        deptno,
        profno,
      ].forEach((v) => {
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
        "UPDATE student SET name=?, userid=?, grade=?, idnum=?, birthdate=?, tel=?, height=?, weight=?, deptno=?, profno=? WHERE studno=?";
      const input_data = [
        name,
        userid,
        grade,
        idnum,
        birthdate,
        tel,
        height,
        weight,
        deptno,
        profno,
        studno,
      ];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 = "SELECT * FROM student WHERE studno=?";
      const [result2] = await dbcon.query(sql2, [studno]);

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
  router.delete("/student/:studno", async (req, res, next) => {
    const studno = req.get("studno");

    if (studno === null) {
      return next(new Error(400));
    }

    /** 데이터 삭제하기 */
    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 자식데이터 null 주기
      await dbcon.query("UPDATE student SET profno=null WHERE profno=?", [
        studno,
      ]);

      // 데이터 삭제하기
      const sql = "DELETE FROM student WHERE studno=?";
      const [result1] = await dbcon.query(sql, [studno]);

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
