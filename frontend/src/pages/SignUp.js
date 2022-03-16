import BasicHeaderBar from "../components/BasicHeaderBar";

const SignUp = () => {
  return (
    <div>
      <BasicHeaderBar title="회원정보 입력" />
      <div className="pop_main">
        <div className="pop_policy">회원정보를 입력해주세요.</div>
        <form>
          <input id="user_name" type="text" placeholder="이름" />
          <input id="email" type="email" placeholder="이메일" />
          <input id="user_id" type="text" placeholder="아이디" />
          <input id="password" type="password" placeholder="비밀번호" />
          <span className="password_guide">
            8자 이상, 숫자와 영문 필수 포함
          </span>
          <input id="password2" type="password" placeholder="비밀번호 확인" />
        </form>
      </div>
      <button className="foot_btn">다음</button>
    </div>
  );
};

export default SignUp;
