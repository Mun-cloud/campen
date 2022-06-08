import BasicHeaderBar from "../components/BasicHeaderBar";
import styled from "styled-components";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const SignContainer = styled.div`
  padding: 40px 20px;
  padding-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  input {
    padding: 10px 0;
    margin-bottom: 20px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  span {
    margin-top: -16px;
    font-size: 12px;
    color: rgb(37, 40, 38);
    margin-bottom: 25px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.lightGray};
  color: rgb(133, 138, 136);
  font-weight: 700;
  font-size: 16px;
  border: none;
  position: absolute;
  bottom: 59px;
  transition: background-color 0.1s ease-in;

  &.checked {
    background-color: ${(props) => props.theme.mainColor};
    color: white;
  }
`;

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const inputUserName = useRef();
  const inputEmail = useRef();
  const inputUserId = useRef();
  const inputPassword1 = useRef();
  const inputPassword2 = useRef();

  const go = useNavigate();

  // 필수 내용들 채워졌는지 확인
  const isFill =
    userName && email && userId && password1 && password2 ? true : false;

  // 유효성 검사
  const regax = () => {
    // 이름
    if (!userName || !(userName.length > 2)) {
      inputUserName.current.focus();
      alert("이름을 확인해주세요");
    }
    // 이메일
    const emailRegax =
      /^([\w-]+(?:\.[\w-]+)*)@*((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!email || !emailRegax.test(email)) {
      inputEmail.current.focus();
      alert("이메일 확인해주세요");
      return false;
    }
    // 아이디
    if (!userId) {
      inputUserId.current.focus();
      alert("아이디를 입력해주세요");
      return false;
    }
    // 비밀번호
    if (!password1) {
      inputPassword1.current.focus();
      alert("비밀번호를 입력해주세요");
      return false;
    }
    if (!password1.length > 7 || !/^[a-zA-Z0-9]*$/.text(password1)) {
      inputPassword1.current.focus();
      alert("비밀번호를 숫자와 영문을 혼합하여 8자 이상 작성해주세요.");
      return false;
    }
    if (!password2) {
      inputPassword2.current.focus();
      alert("비밀번호 확인을 입력해주세요");
      return false;
    }
    if (password1 !== password2) {
      inputPassword1.current.focus();
      alert("비밀번호 입력값이 서로 다릅니다.");
      return false;
    }
    poseData();
  };

  const poseData = async () => {
    try {
      await axios.post(`/api/member/join`, {
        user_id: userId,
        user_pw: password1,
        user_pw2: password2,
        user_name: userName,
        email: email,
      });
      alert("회원가입을 환영합니다!");
      go("/");
    } catch (err) {
      alert(err.response.data.rtmsg);
    }
  };

  return (
    <Container>
      <BasicHeaderBar title="회원정보 입력" />
      <SignContainer className="pop_main">
        <div className="pop_policy">회원정보를 입력해주세요.</div>
        <Form>
          <input
            id="user_name"
            type="text"
            placeholder="이름"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value.trim())}
            ref={inputUserName}
          />
          <input
            id="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value.trim())}
            ref={inputEmail}
          />
          <input
            id="user_id"
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.currentTarget.value.trim())}
            ref={inputUserId}
          />
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            value={password1}
            onChange={(e) => setPassword1(e.currentTarget.value.trim())}
            ref={inputPassword1}
          />
          <span className="password_guide">
            8자 이상, 숫자와 영문 필수 포함
          </span>
          <input
            id="password2"
            type="password"
            placeholder="비밀번호 확인"
            value={password2}
            onChange={(e) => setPassword2(e.currentTarget.value.trim())}
            ref={inputPassword2}
          />
        </Form>
      </SignContainer>
      <Button
        disabled={!isFill}
        onClick={regax}
        className={isFill ? "checked" : ""}
      >
        다음
      </Button>
    </Container>
  );
};

export default SignUp;
