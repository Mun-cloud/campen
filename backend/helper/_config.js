/**
 * @Filename : _config.js
 * @Author : 문태호
 * @Description : 백엔드 개인 설정사항 저장파일
 */

const path = require("path");

module.exports = {
  /** 로그 파일이 저장될 경로 및 출력 레벨 */
  log: {
    debug: {
      path: path.join(__dirname, "../_files/_logs"),
      level: "debug", // 설정된 레벨보다 높은 수준의 로그가 출력된다.
    },
    // 시스템에 심각한 문제가 발생했을 때의 정보를 저장할 파일
    error: {
      path: path.join(__dirname, "../_files/_logs"),
      level: "error",
    },
  },

  /** 웹 서버 포트번호 */
  server_port: process.env.PORT || 3001,

  /** public 디렉토리 경로 */
  public_path: path.join(__dirname, "../../html"),

  /** favicon 경로 */
  favicon_path: path.join(__dirname, "../public/favicon.png"),

  /** 쿠키 저장시 사용할 도메인 */
  // 1) localhost인 경우 공백으로 설정
  // 2) 도메인이 itpaper.co.kr 인 경우 앞에 점을 붙여서 명시 --> ".itpaper.co.kr"
  cookie_domain: ".everycampen.netlify.app",

  /** 보안키 (암호화 키) */
  secure: {
    cookie_encrypt_key: "1234567890",
    session_encrypt_key: "1234567890",
  },

  /** 메일 발송 정보 */
  sendmail_info: {
    host: "smtp.gmail.com", // SMTP 서버명: smtp.gamil.com
    port: 465, // SMTP 포트: 587
    secure: true, // 보안연결(SSL) 필요
    auth: { user: "mun05170@gmail.com", pass: process.env.MAIL_PASS },
  },

  /** 업로드 경로 */
  upload: {
    path: "/upload",
    dir: path.join(__dirname, "../_files/upload"),
    max_size: 1024 * 1024 * 5,
    max_count: 10,
  },

  /** 데이터베이스 연동 정보 */
  database: {
    host: "us-cdbr-east-05.cleardb.net", // MYSQL 서버 주소 (다른 PC인 경우 IP주소)
    port: 3306, // MySQL 설치시 기본값 3306
    user: "bf9dc00d14dfdb", // 접근 권한 아이디 (root=관리자)
    password: process.env.DB_PASS, // 설치시 입력한 비밀번호
    database: "heroku_ea837c295bb7059", // 사용할 데이터베이스 이름
    connectionLimit: 100,
    waitForConnections: true,
    queueLimit: 0,
    keepAliveInitialDelay: 10000, // 0 by default.
    enableKeepAlive: true, // false by default.
  },
};
