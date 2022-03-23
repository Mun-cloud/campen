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

  .password,
  .new-password {
    margin-bottom: 30px;
  }
  .new-password {
    padding-left: 5px;
    font-size: 10pt;
    color: #333;
  }
`;

const Password = () => {
  return (
    <>
      <UserContainer>
        {/* <!-- 헤더 --> */}
        <SubSettingHeader>
          <p>비밀번호 변경</p>
        </SubSettingHeader>

        <Cnt>
          {/*  <!-- 타이틀영역 --> */}
          <SubSettingTitle>
            <div>새로운 비밀번호로</div>
            <div>재설정 해주세요.</div>
          </SubSettingTitle>

          {/*  <!-- 컨텐츠영역 --> */}
          <input placeholder="기존 비밀번호" type="text" name="user-intro" />
          <hr
            class="password"
            style="border: solid 0.5px rgb(211, 211, 211);"
          />

          <input placeholder="새로운 비밀번호" type="text" name="user-intro" />
          <hr style="border: solid 0.5px rgb(211, 211, 211);" />
          <div class="new-password">8자 이상, 숫자와 영문 필수 포함</div>

          <input
            placeholder="새로운 비밀번호 재입력"
            type="text"
            name="user-intro"
          />
          <hr
            class="password"
            style="border: solid 0.5px rgb(211, 211, 211);"
          />
        </Cnt>

        <SubSettingButton />
      </UserContainer>
    </>
  );
};

export default Password;
