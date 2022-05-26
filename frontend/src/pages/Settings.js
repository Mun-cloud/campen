import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicHeaderBar from "../components/BasicHeaderBar";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.lightGray};

  .settings_container {
    background-color: #fff;
    margin-top: 8px;
    padding: 16px 20px;
    cursor: pointer;
    font-size: 13px;
  }

  div > a:nth-child(2) > .settings_container {
    margin-top: 0;
    border-top: 1px solid ${(props) => props.theme.lightGray};
  }
`;

const Settings = () => {
  return (
    <Container>
      <BasicHeaderBar title="설정" />
      <Link to="/usersetting">
        <div className="settings_container">내 정보 수정</div>
      </Link>
      <div>
        <Link to="/term1">
          <div className="settings_container">서비스 이용약관</div>
        </Link>
        <Link to="/term2">
          <div className="settings_container">개인정보 처리방침</div>
        </Link>
      </div>
      <Link to="#">
        <div className="settings_container">회원탈퇴</div>
      </Link>
    </Container>
  );
};

export default Settings;
