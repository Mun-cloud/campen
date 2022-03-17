import style from "styled-components";

const MyLogoutSignUp = () => {
  return (
    <>
      <div class="signup-login">
        {/* 회원가입 */}
        <a href="#" class="signup">
          <button
            class="signup-btn"
            type="button
                "
            mode="outlined"
          >
            <span>회원가입</span>
          </button>
        </a>

        {/*   <!-- 로그인 --> */}
        <a href="#" class="login">
          <button
            class="login-btn"
            type="button
                "
            mode="outlined"
          >
            <span>로그인</span>
          </button>
        </a>
      </div>
    </>
  );
};

export default MyLogoutSignUp;
