import styled from "styled-components";

const TopContainer = styled.header`
max-width: 530px;
margin-left: auto;
margin-right: auto
  top: 0px;
  padding-top: 3px;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(241, 245, 243);
`;

const WriteHeader = () => {
  return (
    <>
      {/* <!-- 글쓰기 상단  --> */}
      <TopContainer>
        <a class="back-btn" href="../commu/commu2.html">
          <span class="material-icons-outlined">arrow_back_ios</span>
        </a>
        <p class="title">글쓰기</p>
      </TopContainer>
    </>
  );
};

export default WriteHeader;
