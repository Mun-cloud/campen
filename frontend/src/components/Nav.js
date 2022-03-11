const Nav = () => {
  return (
    <nav id="nav">
      <a href="./index.html" class="nav_btn">
        <i class="fas fa-home"></i>
        <span class="nav_text">홈</span>
      </a>
      <a href="./search.html" class="nav_btn">
        <i class="fas fa-search"></i>
        <span class="nav_text">갬핑장 검색</span>
      </a>
      <a href="./search.html" class="nav_btn">
        <i class="far fa-comment-alt"></i>
        <span class="nav_text">커뮤니티</span>
      </a>
      <a href="./search.html" class="nav_btn">
        <i class="far fa-user"></i>
        <span class="nav_text">마이</span>
      </a>
    </nav>
  );
};

export default Nav;
