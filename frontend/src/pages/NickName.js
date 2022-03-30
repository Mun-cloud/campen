import styled from "styled-components";
import BasicHeaderBar from "../components/BasicHeaderBar";
import SubSettingButton from "../components/UserSetting/SubUserSettingMenu/SubSettingButton";
import { useNavigate } from "react-router-dom";

const UserContainer = styled.div`
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: rgb(241, 245, 243);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const Cnt = styled.div`
  padding: 20px;
  height: 670px;
  background: rgb(255, 255, 255);

  .title {
    margin: 18px 0px 43px;

    div {
      font-size: 16pt;
      font-weight: 700;
      margin-bottom: 8px;
    }
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

const NickName = () => {
  const go = useNavigate();
  return (
    <>
      <UserContainer>
        {/* <!-- 헤더 --> */}
        <BasicHeaderBar title="닉네임 변경">
          <div
            onClick={() => {
              go(-1);
            }}
          >
            <span class="material-icons-outlined">arrow_back_ios</span>
          </div>
        </BasicHeaderBar>

        {/*  <!-- 컨텐츠 영역  --> */}
        <Cnt>
          <div className="title">
            <div>새로운 닉네임을</div>
            <div>입력해주세요.</div>
          </div>
          <input
            placeholder="변경할 닉네임을 입력해주세요."
            type="text"
            name="user-intro"
          />
          <hr style={{ border: " solid 0.5px rgb(211, 211, 211)" }} />
        </Cnt>

        <SubSettingButton />
      </UserContainer>
    </>
  );
};

export default NickName;
