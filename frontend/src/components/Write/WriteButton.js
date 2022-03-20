import style from "styled-components";

const TabContainer = styled.ul`
  max-width: 530px;
  height: 45px;
  width: 100%;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(212, 217, 214);
  position: fixed;
  display: flex;
  z-index: 1000;
`;

const TabItem = styled.li`
  display: inline-block;
  height: 45px;
  width: 25%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 10.5pt;
    font-weight: 500;
    color: #666;
    cursor: pointer;
  }
`;

const WriteButton = () => {
  return (
    <>
      {/* <!-- 하단 버튼 --> */}
      <button type="button" class="write-submit">
        <span>최소 10자 이상 입력해주세요.</span>
      </button>
    </>
  );
};

export default WriteButton;
