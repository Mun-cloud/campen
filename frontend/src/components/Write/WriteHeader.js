import style from "styled-components";

const WriteHeader = () => {
  return (
    <>
      {/* <!-- 글쓰기 상단  --> */}
      <header class="top-container">
        <a class="back-btn" href="../commu/commu2.html">
          <span class="material-icons-outlined">arrow_back_ios</span>
        </a>
        <p class="title">글쓰기</p>
      </header>
    </>
  );
};

export default WriteHeader;
