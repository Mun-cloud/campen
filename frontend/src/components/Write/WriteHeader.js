import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopContainer = styled.div`
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

const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  cursor: pointer;
  text-decoration: none;

  span {
    font-size: 12pt;
    cursor: pointer;
  }
`;

const Title = styled.p`
  margin: 0px auto;
  padding-right: 52px;
  font-size: 12.5pt;
`;

const WriteHeader = () => {
  const go = useNavigate();
  return (
    <>
      {/* <!-- 글쓰기 상단  --> */}
      <TopContainer>
        <BackBtn href="../commu/commu2.html">
          <div
            onClick={() => {
              go(-1);
            }}
          >
            <span class="material-icons-outlined">arrow_back_ios</span>
          </div>
        </BackBtn>
        <Title>글쓰기</Title>
      </TopContainer>
    </>
  );
};

export default WriteHeader;
