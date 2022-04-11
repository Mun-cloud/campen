import { useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserData } from "../slices/UserSlice";

const Login = () => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [userData, setUserData] = useState();

  //   const { rt, rtmsg, item, loading } = useSelector((state) => state.user);

  // 액션함수를 호출하기 위한 디스패치 함수 생성
  //   const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    // dispatch(getUserData({ user_id: id, user_pw: pw }));
    let res;
    try {
      res = (await axios.post("/member/login", { user_id: id, user_pw: pw }))
        .data.item[0];
      console.log(res);
      sessionStorage.setItem("userData", JSON.stringify(res));
      sessionStorage.setItem("isLogin", true);
      setUserData(JSON.parse(sessionStorage.getItem("userData")));
    } catch (err) {
      console.error(err);
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
