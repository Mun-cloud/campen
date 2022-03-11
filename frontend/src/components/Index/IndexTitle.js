import styled from "styled-components";

/* 캠핀에서 막힘없이 캠핑가자 */
const MainTitle = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 22px;
    line-height: 30px;
  }
`;

const IndexTitle = () => {
  return (
    // <!-- 캠핀 타이틀 -->
    <MainTitle>
      <span>
        <strong style={{ fontWeight: "bold" }}>캠핀</strong>에서
      </span>
      <span>막힘없이 캠핑가자!</span>
    </MainTitle>
  );
};

export default IndexTitle;
