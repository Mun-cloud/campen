import styled from "styled-components";

const Btn = styled.button`
  position: fixed;
  bottom: 60px;
  width: 530px;
  height: 70px;
  font-size: 11.5pt;
  background: rgb(234, 238, 236);
  color: rgb(133, 138, 136);
  font-weight: 700;
  font-size: 12pt;
  border: none;
  cursor: pointer;
`;

const SubSettingButton = ({ fn }) => {
  return (
    <Btn type="button" onClick={fn && fn}>
      <span>변경하기</span>
    </Btn>
  );
};

export default SubSettingButton;
