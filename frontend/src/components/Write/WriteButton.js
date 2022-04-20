import styled from "styled-components";

const WriteSubmit = styled.button`
  position: fixed;
  bottom: 60px;
  width: 530px;
  height: 70px;
  font-size: 11.5pt;
  font-weight: 700;
  font-size: 12pt;
  border: none;
  cursor: pointer;
  background-color: rgb(234, 238, 236);
  color: rgb(133, 138, 136);

  &.active {
    background-color: #43c083;
    color: rgb(255, 255, 255);
  }

  span {
    justify-content: center;
    align-items: center;
  }
`;

const WriteButton = ({ btnText, postCommu, imgUpload }) => {
  return (
    <>
      {/* <!-- 하단 버튼 --> */}

      <WriteSubmit
        className={btnText.length >= 10 ? "active" : ""}
        disabled={!(btnText.length >= 10)}
        onClick={() => {
          postCommu();
          imgUpload();
        }}
      >
        10자 이상 입력해주세요.
      </WriteSubmit>
    </>
  );
};

export default WriteButton;
