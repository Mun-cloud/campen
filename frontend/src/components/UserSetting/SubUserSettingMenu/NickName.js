import styled from "styled-components";
import SubSettingHeader from "../SubUserSettingMenu/SubSettingHeader";
import SubSettingTitle from "../SubUserSettingMenu/SubSettingTitle";
import SubSettingButton from "../SubUserSettingMenu/SubSettingButton";

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
  height: 750px;
  background: rgb(255, 255, 255);

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
  return (
    <>
      <UserContainer>
        {/* <!-- 헤더 --> */}
        <SubSettingHeader>
          <p>닉네임 변경</p>
        </SubSettingHeader>

        {/*  <!-- 컨텐츠 영역  --> */}
        <Cnt>
          <SubSettingTitle>
            <div>새로운 닉네임을</div>
            <div>입력해주세요.</div>
          </SubSettingTitle>
          <input
            placeholder="변경할 닉네임을 입력해주세요."
            type="text"
            name="user-intro"
          />
          <hr style="border: solid 0.5px rgb(211, 211, 211);" />
        </Cnt>

        <SubSettingButton />
      </UserContainer>
    </>
  );
};

export default NickName;
