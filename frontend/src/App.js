import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";

import "./assets/css/style.css";

import Index from "./pages/Index";
import Search from "./pages/Search";
import Camp from "./pages/Camp";
import Exhibition from "./pages/Exhibition";
import ExhiList from "./pages/ExhiList";
import Heart from "./pages/Heart";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import Notice from "./pages/Notice";
import Commu from "./pages/Commu";
import Profile from "./pages/Profile";
import UserSetting from "./pages/UserSetting";
import Write from "./pages/Write";
import UserIntro from "./pages/UserIntro";
import Password from "./pages/Password";
import Nickname from "./pages/NickName";
import Sns from "./pages/Sns";
import Board from "./pages/Board";
import Log from "./pages/Log";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUserData } from "./slices/UserSlice";
import Term1 from "./pages/Term1";
import Term2 from "./pages/Term2";

function App() {
  const dispatch = useDispatch();

  // 로그인 여부 확인
  useEffect(() => {
    (async () => {
      try {
        let data = (await axios.get(`/api/member/info`)).data.item;
        dispatch(getUserData({ user_id: data.user_id, user_pw: data.user_pw }));
      } catch (err) {}
    })();
  });

  return (
    <>
      <Meta />

      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/camp/:id" element={<Camp />} />
        <Route path="/exhibition" element={<ExhiList />} />
        <Route path="/exhibition/:id" element={<Exhibition />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/join" element={<Join />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/notice/*" element={<Notice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/commu/*" element={<Commu />} />
        <Route path="/board/:id" element={<Board />} />
        <Route path="/log/:id" element={<Log />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/usersetting" element={<UserSetting />} />
        <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/userintro" element={<UserIntro />} />
        <Route path="/password" element={<Password />} />
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/sns" element={<Sns />} />
        <Route path="/term1" element={<Term1 />} />
        <Route path="/term2" element={<Term2 />} />
      </Routes>

      <Nav />
    </>
  );
}

export default App;
