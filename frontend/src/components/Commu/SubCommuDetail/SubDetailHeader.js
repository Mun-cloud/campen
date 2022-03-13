import styled from "styled-components";

const SubDetailHeader = () => {
  return (
    <div>
      {/* <!-- header: 상세 상단 --> */}
      <header class="top-container">
        <a class="back-btn" href="../commu2.html">
          <span class="material-icons">keyboard_backspace</span>
        </a>
        <a class="logo" href="#">
          <img src="../img/campen_logo.png" alt="campen" />
        </a>
      </header>
    </div>
  );
};

export default SubDetailHeader;
