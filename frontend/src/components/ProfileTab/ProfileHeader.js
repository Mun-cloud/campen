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
  background: rgb(255, 255, 255);
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

  div {
    cursor: pointer;
  }
`;

const ProfileHeader = () => {
  const go = useNavigate();

  return (
    <>
      {/* <!-- 헤더 --> */}
      <Header>
        <div
          onClick={() => {
            go(-1);
          }}
        >
          <span class="material-icons-outlined">arrow_back_ios</span>
        </div>
        <p>프로필</p>
      </Header>
    </>
  );
};

export default ProfileHeader;
