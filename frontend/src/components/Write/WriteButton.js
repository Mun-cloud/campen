import styled from "styled-components";

const WriteSubmit = styled.button`
  max-width: 530px;
  bottom: 0px;
  width: 100%;
  height: 55px;
  font-size: 11.5pt;
  background: rgb(234, 238, 236);
  color: rgb(133, 138, 136);
  font-weight: 700;
  font-size: 12pt;
  border: none;
  cursor: pointer;

  span {
    justify-content: center;
    align-items: center;
  }
`;

const WriteButton = () => {
  return (
    <>
      {/* <!-- 하단 버튼 --> */}
      <WriteSubmit type="button">
        <span>최소 10자 이상 입력해주세요.</span>
      </WriteSubmit>
    </>
  );
};

export default WriteButton;
