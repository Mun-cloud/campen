import style from "styled-components";

const ReportHeader = () => {
  return (
    <>
      {/* <!-- 글쓰기 상단  --> */}
      <header class="top-container">
        <a class="back-btn" href="#">
          <span class="material-icons-outlined">arrow_back_ios</span>
        </a>
        <p class="title">신고사유</p>
      </header>
    </>
  );
};

export default ReportHeader;
