import styled from "styled-components";

const Btn = styled.button`
  max-width: 530px;

  bottom: 100px;
  width: 100%;
  height: 70px;
  font-size: 11.5pt;
  background: rgb(234, 238, 236);
  color: rgb(133, 138, 136);
  font-weight: 700;
  font-size: 12pt;
  border: none;
  cursor: pointer;
`;

const SubSettingButton = () => {
  return (
    <>
      {/*  <!-- 버튼 영역 --> */}
      <Btn type="button">
        <span>변경하기</span>
      </Btn>
    </>
  );
};

export default SubSettingButton;
