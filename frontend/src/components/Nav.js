import { Link } from "react-router-dom";
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

  .nav_btn i {
    font-size: 21px;
    margin-bottom: 10px;
  }
`;

const Nav = () => {
  return (
    <NavBar id="nav">
      <div>
        <Link to="/" className="nav_btn">
          <i className="fas fa-home"></i>
          <span className="nav_text">홈</span>
        </Link>
        <Link to="/search" className="nav_btn">
          <i className="fas fa-search"></i>
          <span className="nav_text">갬핑장 검색</span>
        </Link>
        <Link to="/commu" className="nav_btn">
          <i className="far fa-comment-alt"></i>
          <span className="nav_text">커뮤니티</span>
        </Link>
        <Link to="/mypage" className="nav_btn">
          <i className="far fa-user"></i>
          <span className="nav_text">마이</span>
        </Link>
      </div>
    </NavBar>
  );
};

export default Nav;
