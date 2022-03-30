import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav">
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
      <Link to="/mylogin" className="nav_btn">
        <i className="far fa-user"></i>
        <span className="nav_text">마이</span>
      </Link>
    </nav>
  );
};

export default Nav;
