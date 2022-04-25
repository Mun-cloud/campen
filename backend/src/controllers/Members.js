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
  router.post("/member/join", async (req, res, next) => {
    // // WebHelper에 추가된 기능을 활용하여 업로드 객체 반환받기
    // const multipart = req.getMultipart();

    // // 업로드 수행하기
    // const upload = multipart.single("profile_img");

    // // 업로드 된 파일의 정보를 로그로 기록 (필요에 따른 선택 사항)
    // logger.debug(JSON.stringify(req.file));
    // const photo = req.file.url;

    // 텍스트 파라미터 받기
    const user_id = req.post("user_id");
    const user_pw = req.post("user_pw");
    const user_name = req.post("user_name");
    const email = req.post("email");

    // 유효성 검사
    try {
      regexHelper.value(user_id, "아이디를 입력하세요.");
      // regexHelper.value(user_pw, "비밀번호를 입력하세요.");
      // regexHelper.value(user_name, "이름를 입력하세요.");
      // regexHelper.value(email, "이메일를 입력하세요.");
      // regexHelper.value(phone, "휴대폰 번호를 입력하세요.");
    } catch (err) {
      return next(err);
    }
    let json;
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
      sql += "user_id, user_pw, user_name, email, photo, ";
      sql +=
        "intro, sns_addr, nickname, is_out, is_admin, login_date, reg_date, edit_date";
      sql += ") VALUES (";
      sql +=
        "?, ?, ?, ?, null, null, null, null, 'N', 'N', null, now(), now());";

      const args = [user_id, user_pw, user_name, email];
      const [result2] = await dbcon.query(sql, args);

      let sql2 = `UPDATE members SET nickname=? WHERE id=?`;
      await dbcon.query(sql2, [`캠퍼 ${result2.insertId}`, result2.insertId]);

      json = result1;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 모든 구현에 성공했다면 가입 환영 메일 발송
    const receiver = `${user_name} <${email}>`;
    const subject = `${user_name}님의 회원가입을 환영합니다.`;
    const html = `<p><striong>${user_name}</striong>님, 회원가입해 주셔서 감사합니다.</p><p>앞으로 많은 이용 바랍니다.</p>`;

    // try {
    //   res.send(receiver, subject, html);
    //   // res.sendMail(receiver, subject, html);
    // } catch (err) {
    //   throw new RuntimeException(
    //     "회원가입은 완료 되었지만 가입 환영 메일 발송에 실패했습니다."
    //   );
    // }

    // 처리 성공시에 대한 응답 처리
    res.sendJson({ item: json });
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
        "SELECT id, user_id, user_pw, user_name, email, photo, intro, sns_addr, nickname, is_out, is_admin, login_date, reg_date, edit_date FROM members WHERE user_id=? AND user_pw=?";
      let args1 = [user_id, user_pw];

      const [result1] = await dbcon.query(sql1, args1);

      // console.log(result1);
      // const totalCount = result1[0].cnt;
      // if (totalCount < 1) {
      //   throw new BadRequestException("회원정보가 일치하지 않습니다");
      // }
      // 조회된 회원정보 객체를 저장하고 있는 1차원 배열(원소는 1개)
      json = result1;
      // 조회된 데이터가 없다면? WHERE절이 맞지 않다는 의미 -> 아이디, 비번 틀림
      if (json == null || json.length == 0) {
        return next(
          new BadRequestException("아이디나 비밀번호가 잘못되었습니다.")
        );
      }
      // login_date값을 now()로 update처리
      let sql2 = "UPDATE members SET login_date=now() WHERE id=?";
      await dbcon.query(sql2, json[0].id);

      let sql3 =
        "SELECT id, contents_id, reg_date FROM `contents-likes` WHERE members_id=?";
      const result3 = await dbcon.query(sql2, json[0].id);

      json[0].contentLikes = result3;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    // 탈퇴한 회원은 로그인 금지
    if (json[0].is_out == "Y") {
      return next(new BadRequestException("탈퇴한 회원입니다."));
    }

    // 조회 결과를 세션에 저장.
    req.session.memberInfo = json[0];

    res.sendJson({ item: json });
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
   * @parma put 데이터베이스 테이블 내의 수정할 컬럼 값을 파라미터값으로 입력
   */
  router.put("/member/:put", async (req, res, next) => {
    if (!req.session.memberInfo) {
      return next(new BadRequestException("로그인중이 아닙니다."));
    }

    const id = req.session.memberInfo.id;
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
      const sql = `UPDATE members SET ${put}=?, edit_date=now() WHERE id=?`;
      const input_data = [input, id];
      const [result1] = await dbcon.query(sql, input_data);

      // 결과 행 수가 0이라면 예외처리
      if (result1.affectedRows < 1) {
        throw new Error("수정된 데이터가 없습니다.");
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      const sql2 =
        "SELECT id, user_id, user_pw, user_name, email, photo, intro, sns_addr, nickname, is_out, is_admin, login_date, reg_date, edit_date FROM members WHERE id=?";
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

  // /** 데이터 삭제 --> Delete(DELETE) */
  // router.delete("/member/:id", async (req, res, next) => {
  //   const id = req.get("id");

  //   if (id === null) {
  //     return next(new Error(400));
  //   }

  //   /** 데이터 삭제하기 */
  //   try {
  //     // 데이터베이스 접속
  //     dbcon = await mysql2.createConnection(config.database);
  //     await dbcon.connect();

  //     // 삭제하고자 하는 원 데이터를 참조하는 자식 데이터를 먼저 삭제해야 한다.
  //     // 만약 자식데이터를 유지해야 한다면 참조키 값을 null로 업데이트 해야 한다.
  //     // 단, 자식 데이터는 결과행 수가 0이더라도 무시한다.
  //     // await dbcon.query("DELETE FROM student WHERE deptno=?", [deptno]);
  //     // await dbcon.query("DELETE FROM professor WHERE deptno=?", [deptno]);

  //     // 데이터 삭제하기
  //     const sql = "UPDATE members SET is_out='Y', edit_date=now() WHERE id=?";
  //     const [result1] = await dbcon.query(sql, [deptno]);

  //     json = result1;
  //     // 결과 행 수가 0이라면 예외처리
  //     if (result1.affectedRows < 1) {
  //       throw new Error("삭제된 데이터가 없습니다.");
  //     }
  //   } catch (err) {
  //     return next(err);
  //   } finally {
  //     dbcon.end();
  //   }

  //   // 모든 처리에 성공했으므로 정상 조회 결과 구성
  //   res.sendJson({ item: json });
  // });
  // // //  (프로필 사진 업로드) 업로드 처리 후 파라미터 받기
  // // upload(req, res, async (err) => {
  // //   // 업로드 에러 처리
  // //   if (err) {
  // //     throw new MultipartException(err);
  // //   }

  // // });

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

    let json;
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

      json = result1;
      req.session.destroy();
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    res.sendJson({ item: json });
  });

  /**
   * 아이디 params로 user 찾기
   */

  router.get("/member/:id", async (req, res, next) => {
    // 파라미터 받기
    const id = req.get("id");

    // 데이터 조회 결과가 저장될 빈 변수
    let json = null;

    try {
      // 데이터베이스 접속
      dbcon = await mysql2.createConnection(config.database);
      await dbcon.connect();

      // 아이디가 중복되는 데이터 수를 조회
      let sql1 =
        "SELECT id, user_id, user_name, email, photo, intro, sns_addr, nickname FROM members WHERE id=?";
      let args1 = [id];

      const [result1] = await dbcon.query(sql1, args1);

      let sql2 =
        "SELECT id contentId, reg_date, tab, cast(content as char(10000)) content FROM contents WHERE members_id=?";
      const [result2] = await dbcon.query(sql2, [id]);

      json = result1[0];
      json.contents = result2;
    } catch (err) {
      return next(err);
    } finally {
      dbcon.end();
    }

    res.sendJson(json);
  });

  return router;
};
