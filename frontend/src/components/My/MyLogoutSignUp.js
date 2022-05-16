import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupLogin = styled.div`
  background: rgb(255, 255, 255);
  padding: 28px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 45%;
  height: 48px;
  padding: 6px 8px;
  border: 1px solid rgb(212, 217, 214);
  border-radius: 8px;
  background: rgb(255, 255, 255);
  color: rgb(37, 40, 38);
  font-family: SpoqaHanSans;
  font-weight: 400;
  font-size: 11pt;
  cursor: pointer;
`;

const MyLogoutSignUp = () => {
  return (
    <>
      <SignupLogin>
        {/* 회원가입 */}
        <Link to="/sign-up" className="signup">
          <Btn
            type="button
                "
            mode="outlined"
          >
            <span>회원가입</span>
          </Btn>
        </Link>

        {/*   <!-- 로그인 --> */}
        <Link to="/login" className="login">
          <Btn
            type="button
                "
            mode="outlined"
          >
            <span>로그인</span>
          </Btn>
        </Link>
      </SignupLogin>
    </>
  );
};

export default MyLogoutSignUp;
