/** 모듈 참조 부분 */
const config = require("../../helper/_config");
const logger = require("../../helper/LogHelper");
const regexHelper = require("../../helper/RegexHelper");
const utilHelper = require("../../helper/UtilHelper");
const BadRequestException = require("../../exceptions/BadRequestException");
const RuntimeException = require("../../exceptions/RuntimeException");
const MultipartException = require("../../exceptions/MultipartException");
const router = require("express").Router();
const mysql2 = require("mysql2/promise");

/** 라우팅 정의 부분 */
module.exports = (app) => {
  let dbcon = null;

  /**
   * 아이디 중복검사
   * [POST] /member/id_unique_check
   */
  router.post("/member/id_unique_check", async (req, res, next) => {
    // 파라미터 받기
    const user_id = req.post("user_id");

    try {
      regexHelper.value(user_id, "아이디를 입력하세요.");
    } catch (err) {
      return next(err);
    }

    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 아이디가 중복되는 데이터 수를 조회
      let sql1 = "SELECT COUNT(*) 'cnt' FROM members WHERE user_id=?";
      let args1 = [user_id];

      const [result1] = await dbcon.query(sql1, args1);
      const totalCount = result1[0].cnt;

      if (totalCount > 0) {
        throw new BadRequestException("이미 사용중인 아이디 입니다.");
      }
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    res.sendJson();
  });

  /**
   * 회원가입
   * [POST] /member
   */
  router.post("/member/join", (req, res, next) => {
    // WebHelper에 추가된 기능을 활용하여 업로드 객체 반환받기
    const multipart = req.getMultipart();

    // 업로드 수행하기
    const upload = multipart.single("profile_img");

    //  업로드 처리 후 텍스트 파라미터 받기
    upload(req, res, async (err) => {
      // 업로드 에러 처리
      if (err) {
        throw new MultipartException(err);
      }

      // 업로드 된 파일의 정보를 로그로 기록 (필요에 따른 선택 사항)
      logger.debug(JSON.stringify(req.file));

      // 텍스트 파라미터 받기
      const user_id = req.post("user_id");
      const user_pw = req.post("user_pw");
      const user_name = req.post("user_name");
      const email = req.post("email");
      const phone = req.post("phone");
      const birthday = req.post("birthday");
      const gender = req.post("gender");
      const postcode = req.post("postcode");
      const addr1 = req.post("addr1");
      const addr2 = req.post("addr2");
      const photo = req.file.url;

      // 유효성 검사
      // try {
      //   regexHelper.value(user_id, "아이디를 입력하세요.");
      //   regexHelper.value(user_pw, "비밀번호를 입력하세요.");
      //   regexHelper.value(user_name, "이름를 입력하세요.");
      //   regexHelper.value(email, "이메일를 입력하세요.");
      //   regexHelper.value(phone, "휴대폰 번호를 입력하세요.");
      //   regexHelper.value(birthday, "생년월일을 입력하세요.");
      //   regexHelper.value(gender, "성별을 입력하세요.");
      //   regexHelper.value(postcode, "우편번호를 입력하세요.");
      //   regexHelper.value(addr1, "주소를 입력하세요.");
      //   regexHelper.value(addr2, "주소를 입력하세요.");
      // } catch (err) {
      //   return next(err);
      // }

      try {
        // 데이터베이스 접속
        dbcon = await mysql2.createConnection(config.database);
        await dbcon.connect();

        // 아이디가 중복되는 데이터 수를 조회(중복검사)
        let sql1 = "SELECT COUNT(*) 'cnt' FROM members WHERE user_id=?";
        let args1 = [user_id];

        const [result1] = await dbcon.query(sql1, args1);
        const totalCount = result1[0].cnt;

        if (totalCount > 0) {
          throw new BadRequestException("이미 사용중인 아이디 입니다.");
        }

        // 전송받은 모든 정보를 회원 테이블에 저장(INSERT)
        let sql = "INSERT INTO `members` (";
        sql += "user_id, user_pw, user_name, email, phone, birthday, gender, ";
        sql +=
          "postcode, addr1, addr2, photo, is_out, is_admin, login_date, reg_date, edit_date";
        sql += ") VALUES (";
        sql +=
          "?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'N', 'N', null, now(), now());";

        const args = [
          user_id,
          user_pw,
          user_name,
          email,
          phone,
          birthday,
          gender,
          postcode,
          addr1,
          addr2,
          photo,
        ];

        await dbcon.query(sql, args);
      } catch (err) {
        return next(err);
      } finally {
        dbcon.end();
      }

      // 모든 구현에 성공했다면 가입 환영 메일 발송
      const receiver = `${user_name} <${email}>`;
      const subject = `${user_name}님의 회원가입을 환영합니다.`;
      const html = `<p><striong>${user_name}</striong>님, 회원가입해 주셔서 감사합니다.</p><p>앞으로 많은 이용 바랍니다.</p>`;

      try {
        res.sendMail(receiver, subject, html);
      } catch (err) {
        throw new RuntimeException(
          "회원가입은 완료 되었지만 가입 환영 메일 발송에 실패했습니다."
        );
      }

      // 처리 성공시에 대한 응답 처리
      res.sendJson();
    });
  });

  /**
   * 로그인
   * 원래 로그인은 "조회"에 해당하므로 GET 방식 접속이어야 하지만,
   * 아이디와 비밀번호가 URL로 노출되는 것은 보안에 좋지 않으므로 POST방식으로 처리
   * [POST] /member
   */
  router.post("/member/login", async (req, res, next) => {
    // 파라미터 받기
    const user_id = req.post("user_id");
    const user_pw = req.post("user_pw");

    try {
      // 아이디와 비밀번호를 유추하는데 힌트가 될 수 있으므로
      // 유효성 검사는 입력 여부만 확인한다.
      regexHelper.value(user_id, "아이디를 입력하세요.");
      regexHelper.value(user_pw, "비밀번호를 입력하세요.");
    } catch (err) {
      return next(err);
    }

    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 아이디와 비밀번호가 일치하는 데이터를 조회 (조회결과에서 비밀번호는 제외)
      let sql1 =
        "SELECT id, user_id, user_name, email, phone, birthday, gender, postcode, addr1, addr2, photo, is_out, is_admin, login_date, reg_date, edit_date FROM members WHERE user_id=? AND user_pw=?";
      let args1 = [user_id, user_pw];

      const [result1] = await dbcon.query(sql1, args1);

      // 조회된 회원정보 객체를 저장하고 있는 1차원 배열(원소는 1개)
      json = result1;

      // login_date값을 now()로 update처리
      let sql2 = "UPDATE members SET login_date=now() WHERE id  = ?";
      dbcon.query(sql2, json[0].id);
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 조회된 데이터가 없다면? WHERE절이 맞지 않다는 의미 -> 아이디, 비번 틀림
    if (json == null || json.length == 0) {
      return next(
        new BadRequestException("아이디나 비밀번호가 잘못되었습니다.")
      );
    }

    // 탈퇴한 회원은 로그인 금지
    if (json[0].is_out == "Y") {
      return next(new BadRequestException("탈퇴한 회원입니다."));
    }

    // 조회 결과를 세션에 저장.
    req.session.memberInfo = json[0];

    res.sendJson();
  });

  /**
   * 로그인 정보 확인
   * [GET] /member
   */
  router.get("/member/info", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }

    res.sendJson({ item: req.session.memberInfo });
  });

  /**
   * 로그아웃
   * [DELETE] /member
   */
  router.delete("/member/logout", (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }

    try {
      req.session.destroy();
    } catch (err) {
      return next(err);
    }

    res.sendJson();
  });

  /**
   * 회원정보 수정
   * 회원과 관련된 처리의 경우 UPDATE나 DELETE에서 사용할 WHERE절의 PK값을
   * 보안상의 이유로 별도 전송하지 않는다.
   * 로그인을 할 경우 회원의 정보가 SESSION에 저장되어 있을 것이므로
   * 모든 개별 회원에 대한 접근은 SESSION 데이터를 활용해야 한다.
   * [PUT] /member
   */
  router.put("/member/join", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }
  });

  /**
   * 회원탈퇴
   * 탈퇴 처리가 회원 데이터를 삭제하는 것을 의미하므로 DELETE방식의 접근이 맞지만,
   * 실제 비지니스 로직에서는 회원 데이터를 즉시 삭제하는 것이 아니라 탈퇴 여부를 의미하는 컬럼의 값을 UPDATE하는 것으로 처리 (실제 SQL문은 UPDATE)
   * 별도의 batch 프로그램으로 탈퇴 여부를 의미하는 컬럼(is_out)의 값이 Y이고
   * 데이터가 변경된 시기가 3개월 전인지를 검사하여 일괄 삭제 한다.
   * [DELETE]] /member/out
   */
  router.delete("/member/join", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 아이디와 비밀번호가 일치하는 데이터를 조회 (조회결과에서 비밀번호는 제외)
      let sql1 = "UPDATE members SET is_out='Y', edit_date=now() WHERE id=?";
      let args1 = [req.session.memberInfo.id];

      const [result1] = await dbcon.query(sql1, args1);

      if (result1.affectedRows < 1) {
        throw new Error("탈퇴처리에 실패했습니다.");
      }

      req.session.destroy();
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    res.sendJson;
  });

  /**
   * 회원정보 수정
   * 회원과 관련된 처리의 경우 UPDATE나 DELETE에서 사용할 WHERE절의 PK값을
   * 보안상의 이유로 별도 전송하지 않는다.
   * 로그인을 할 경우 회원의 정보가 SESSION에 저장되어 있을 것이므로
   * 모든 개별 회원에 대한 접근은 SESSION 데이터를 활용해야 한다.
   * [PUT] /member
   */
  router.put("/member/join", async (req, res, next) => {});

  return router;
};