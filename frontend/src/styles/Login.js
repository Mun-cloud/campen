import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserData } from "../slices/UserSlice";

const Login = () => {
  const go = useNavigate();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = (
        await axios.post("/member/login", { user_id: id, user_pw: pw })
      ).data.item[0];
      dispatch(getUserData({ user_id: id, user_pw: pw }));
      alert(`${res.user_name}님 환영합니다.`);
      go("/");
    } catch (err) {
      console.error(err);
      alert(err.response.data.rtmsg);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <input
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
          type="text"
          placeholder="아이디를 입력하세요"
        />
        <input
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button>로그인</button>
      </form>
      <button>로그아웃</button>
    </div>
  );
};

export default Login;
