import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  max-width: 530px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 1000;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .nav_btn {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 11px;
  }
`;

const ActiveIcon = styled.i`
  font-size: 21px;
  margin-bottom: 10px;
  color: ${(props) => (props.isActive ? props.theme.mainColor : "black")};
`;

const ActiveIconText = styled.span`
  color: ${(props) => (props.isActive ? props.theme.mainColor : "black")};
`;

const Nav = () => {
  // 홈 버튼 링크
  const homeMatch = useMatch("/");

  // 검색 버튼 링크
  const searchMatch = useMatch("/search/*");

  // 커뮤니티 버튼 링크
  const commuMatch = useMatch("/commu/*");
  const boardMatch = useMatch("/board/:id");
  const logMatch = useMatch("/log/:id");
  const writeMatch = useMatch("/write/*");
  const commuActive =
    commuMatch !== null ||
    boardMatch !== null ||
    logMatch !== null ||
    writeMatch;

  // 마이 버튼 링크
  const myPageMatch = useMatch("/mypage/*");
  const settingsMatch = useMatch("/usersetting/*");
  const loginMatch = useMatch("/login");
  const userintroMatch = useMatch("/userintro");
  const passwordMatch = useMatch("/password");
  const nicknameMatch = useMatch("/nickname");
  const snsMatch = useMatch("/sns");
  const myActive =
    myPageMatch !== null ||
    settingsMatch !== null ||
    loginMatch !== null ||
    userintroMatch !== null ||
    passwordMatch !== null ||
    nicknameMatch !== null ||
    snsMatch !== null;

  return (
    <NavBar id="nav">
      <div>
        <Link to="/" className="nav_btn">
          <ActiveIcon
            className="fas fa-home"
            isActive={homeMatch !== null}
          ></ActiveIcon>
          <ActiveIconText className="nav_text" isActive={homeMatch !== null}>
            홈
          </ActiveIconText>
        </Link>
        <Link to="/search" className="nav_btn">
          <ActiveIcon
            className="fas fa-search"
            isActive={searchMatch !== null}
          ></ActiveIcon>
          <ActiveIconText className="nav_text" isActive={searchMatch !== null}>
            갬핑장 검색
          </ActiveIconText>
        </Link>
        <Link to="/commu" className="nav_btn">
          <ActiveIcon
            className={
              commuActive ? "fas fa-comment-alt" : "far fa-comment-alt"
            }
            isActive={commuActive}
          ></ActiveIcon>
          <ActiveIconText className="nav_text" isActive={commuActive}>
            커뮤니티
          </ActiveIconText>
        </Link>
        <Link to="/mypage" className="nav_btn">
          <ActiveIcon
            className={myActive ? "fas fa-user" : "far fa-user"}
            isActive={myActive}
          ></ActiveIcon>
          <ActiveIconText className="nav_text" isActive={myActive}>
            마이
          </ActiveIconText>
        </Link>
      </div>
    </NavBar>
  );
};

export default Nav;
