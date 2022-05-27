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
  background-color: ${(props) => props.theme.lightGray};
  color: rgb(133, 138, 136);

  &.active {
    background-color: #43c083;
    color: ${(props) => props.theme.white};
  }

  span {
    justify-content: center;
    align-items: center;
  }
`;

const WriteButton = ({ btnText, postCommu }) => {
  return (
    <>
      {/* <!-- 하단 버튼 --> */}

      <WriteSubmit
        className={btnText.length >= 10 ? "active" : ""}
        disabled={!(btnText.length >= 10)}
        onClick={postCommu}
      >
        {btnText.length >= 10 ? "작성 완료" : "10자 이상 입력해주세요."}
      </WriteSubmit>
    </>
  );
};

export default WriteButton;
