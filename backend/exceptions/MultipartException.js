class MultipartException extends Error {
  constructor(err) {
    let msg = null;

    if (err instanceof multer.MulterError) {
      switch (err.code) {
        case "LIMIT_FILE-COUNT":
          msg = "업로드 가능한 파일의 수를 초과했습니다.";
          break;
        case "LIMIT_FILE-SIZE":
          msg = "업로드 가능한 파일의 용량을 초과했습니다.";
          break;
        default:
          msg = "파일 업로드 도중 알 수 없는 에러가 발생했습니다.";
          break;
      }
    }
    super(msg);
    // 멤버변수 추가
    this._statusCode = 500;
  }

  get statusCode() {
    return this._statusCode;
  }
}

module.exports = MultipartException;
