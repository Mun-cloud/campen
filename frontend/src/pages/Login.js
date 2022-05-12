import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../slices/UserSlice";
import BasicHeaderBar from "../components/BasicHeaderBar";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  section {
    text-align: center;
    padding: 20px;

    .login_title {
      margin-top: 46px;

      img {
        width: 165px;
        height: auto;
        margin-bottom: 15px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 35px 35.5px 50px;

      input {
        appearance: none;
        border: none;
        outline: none;
        width: 100%;
        padding: 0px 0px 6px 4px;
        border-bottom: 1px solid rgb(234, 238, 236);
        font-size: 16px;
        box-shadow: white 0px 0px 0px 1000px inset;

        &:first-child {
          margin-bottom: 37px;
        }
      }
    }

    button {
      width: 100%;
      height: 56px;
      margin-top: 0px;
      background: rgb(67, 192, 131);
      border-radius: 8px;
      color: rgb(255, 255, 255);
      font-weight: 700;
      font-size: 17px;
      border: none;
    }

    > p {
      margin: 30px 0px 28px;
      text-align: center;
      color: rgb(90, 94, 91);
      font-size: 14px;
    }
  }
`;

const Login = () => {
  const { item } = useSelector((state) => state.user);
  const go = useNavigate();

  useEffect(() => {
    if (item) {
      go(-1);
    }
  });

  const [id, setId] = useState();
  const [pw, setPw] = useState();

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();
  const onClick = async (e) => {
    e.preventDefault();

    try {
      let res = (
        await axios.post(
          `${process.env.REACT_APP_BACK}/member/login`,
          {
            user_id: id,
            user_pw: pw,
          },
          { withCredentials: true }
        )
      ).data.item[0];
      dispatch(getUserData({ user_id: id, user_pw: pw }));

      alert(`${res.user_name}님 환영합니다.`);
      go("/");
    } catch (err) {
      alert(err.response.data.rtmsg);
    }
  };

  return (
    <Container>
      <BasicHeaderBar title="로그인" />
      <section>
        <div className="login_title">
          <Link to="/">
            <img
              src={require("../assets/img/campen_logo.png")}
              alt="홈페이지로 이동"
            />
          </Link>
          <p>우리집 캠핑 노하우, 캠핏</p>
        </div>

        <form>
          <input
            value={id}
            onChange={(e) => setId(e.currentTarget.value)}
            type="text"
            placeholder="아이디"
          />
          <input
            value={pw}
            onChange={(e) => setPw(e.currentTarget.value)}
            type="password"
            placeholder="비밀번호"
          />
        </form>
        <button onClick={onClick}>로그인</button>

        <p>
          <Link to="/join">회원가입하기</Link>
        </p>
      </section>
    </Container>
  );
};

export default Login;
