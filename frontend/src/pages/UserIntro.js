import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SubSettingButton from "../components/UserSetting/SubUserSettingMenu/SubSettingButton";

const UserContainer = styled.div`
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: rgb(241, 245, 243);
`;

const UserHeader = styled.div`
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
`;

const SettingCnt = styled.div`
  padding: 20px;
  height: 670px;
  background: rgb(255, 255, 255);

  .cnt-text {
    margin: 18px 0px 43px;
  }

  .cnt-text div {
    font-size: 16pt;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 0px 0px 0px 5px;
    color: rgb(5, 6, 6);
    font-family: SpoqaHanSans;
    font-weight: 400;
    font-size: 12pt;
    border: none;
    outline: none;
  }
`;

const UserIntro = () => {
  const go = useNavigate();
  return (
    <>
      <UserContainer>
        {/* <!-- 헤더 --> */}
        <UserHeader>
          <div
            onClick={() => {
              go(-1);
            }}
          >
            <span class="material-icons-outlined">arrow_back_ios</span>
          </div>
          <p>한 줄 소개 설정</p>
        </UserHeader>

        {/*  <!-- 컨텐츠 영역  --> */}
        <SettingCnt>
          <div className="cnt-text">
            <div>캠퍼님을 소개할 수 있는</div>
            <div>소개글을 입력해주세요.</div>
          </div>
          <input
            placeholder="변경할 닉네임을 입력해주세요."
            type="text"
            name="user-intro"
          />
          <hr style={{ border: "solid 0.5px rgb(211, 211, 211)" }} />
        </SettingCnt>

        <SubSettingButton />
      </UserContainer>
    </>
  );
};

export default UserIntro;
