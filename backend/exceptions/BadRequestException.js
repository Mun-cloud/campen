/**
 * @Filename    : BadRequestException.js
 * @Author      : 문태호
 * @Description : 요청정보가 잘못되었을 시 에러 응답
 */
class BadRequestException extends Error {
  constructor(msg = "잘못된 요청 입니다.") {
    super(msg);
    // 멤버변수 추가
    this._statusCode = 400;
  }

  get statusCode() {
    return this._statusCode;
  }
}

module.exports = BadRequestException;
