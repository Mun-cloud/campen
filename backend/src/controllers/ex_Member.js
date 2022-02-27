/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const logger = require("../../helper/LogHelper");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");
const regexHelper = require("../../helper/RegexHelper");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /** 데이터추가 --> Create(INSERT) */
  router.post("/member", async (req, res, next) => {
    const user = req.post("user");
    const password = req.post("password");
    const name = req.post("name");
    const birthdate = req.post("birthdate");
    const gender = req.post("gender");
    const email = req.post("email");
    const nationCd = req.post("nationCd");
    const phone = req.post("phone");
    const reg_date = req.post("reg_date");

    try {
      regexHelper.value(user, "필수 입력값이 누락되었습니다.");
      regexHelper.value(password, "필수 입력값이 누락되었습니다.");
      regexHelper.value(name, "필수 입력값이 누락되었습니다.");
      regexHelper.value(birthdate, "필수 입력값이 누락되었습니다.");
      regexHelper.value(gender, "필수 입력값이 누락되었습니다.");
      regexHelper.value(email, "필수 입력값이 누락되었습니다.");
      regexHelper.value(nationCd, "필수 입력값이 누락되었습니다.");
      regexHelper.value(phone, "필수 입력값이 누락되었습니다.");
      regexHelper.value(reg_date, "필수 입력값이 누락되었습니다.");
      regexHelper.maxLength(user, 30, "아이디가 너무 깁니다.");
      regexHelper.maxLength(name, 20, "이름이 너무 깁니다.");
      regexHelper.maxLength(email, 150, "이메일주소가 너무 깁니다.");
      regexHelper.maxLength(nationCd, 4, "국가번호가 너무 깁니다.");
      regexHelper.telphone(phone, "전화번호를 확인해주시기 바랍니다.");
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
        "INSERT INTO member (user, password, name, birthdate, gender, email, nationCd, phone, reg_date) VALUES (?, ?,?,?,?,?,?,?,?)";
      const input_data = [
        user,
        password,
        name,
        birthdate,
        gender,
        email,
        nationCd,
        phone,
        reg_date,
      ];
      const [result1] = await dbcon.query(sql, input_data);
      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 = "SELECT * FROM member WHERE id=?";
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

  return router;
};
