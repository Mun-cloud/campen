import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupLogin = styled.div`
  background: ${(props) => props.theme.white};
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
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.nomalGray};
  border-radius: 8px;
  background: ${(props) => props.theme.white};
  color: rgb(37, 40, 38);
  font-family: SpoqaHanSans;
  font-weight: 400;
  font-size: 11pt;
  cursor: pointer;
`;

const MyLogoutSignUp = () => {
  const go = useNavigate();

  return (
    <>
      <SignupLogin>
        {/* 회원가입 */}
        <Btn type="button" mode="outlined" onClick={() => go("/join")}>
          <span>회원가입</span>
        </Btn>

        {/*   <!-- 로그인 --> */}
        <Btn type="button" mode="outlined" onClick={() => go("/login")}>
          <span>로그인</span>
        </Btn>
      </SignupLogin>
    </>
  );
};

export default MyLogoutSignUp;
