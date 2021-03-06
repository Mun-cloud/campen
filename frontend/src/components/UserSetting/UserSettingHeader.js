import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  top: 0px;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 52px;
  max-width: 530px;
  width: 100%;
  background: ${(props) => props.theme.white};
  border-bottom: 1px solid rgb(241, 245, 243);
  color: #333;

  span {
    width: 50px;
    margin-left: 20px;
    font-size: 13pt;
    font-weight: 700;
    cursor: pointer;
  }

  p {
    margin: 0px auto;
    padding-right: 70px;
    font-size: 12.5pt;
  }
`;

const UserSettingHeader = () => {
  const go = useNavigate();
  return (
    <Header>
      <div
        onClick={() => {
          go(-1);
        }}
      >
        <span className="material-icons-outlined">arrow_back_ios</span>
      </div>

      <p>내 정보 관리</p>
    </Header>
  );
};

export default UserSettingHeader;
