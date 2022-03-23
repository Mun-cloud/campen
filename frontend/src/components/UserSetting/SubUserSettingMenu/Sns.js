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

const Password = () => {
  return (
    <>
      <UserContainer>
        {/* <!-- 헤더 --> */}
        <SubSettingHeader>
          <p>SNS 설정</p>
        </SubSettingHeader>

        <Cnt>
          {/*  <!-- 타이틀영역 --> */}
          <SubSettingTitle>
            <div>SNS를</div>
            <div>입력해주세요.</div>
          </SubSettingTitle>

          {/*  <!-- 컨테츠영역 --> */}

          <input
            placeholder="인스타그램 아이디를 입력해주세요."
            type="text"
            name="user-intro"
          />
          <hr
            class="password"
            style="border: solid 0.5px rgb(211, 211, 211);"
          />

          <input
            placeholder="블로그 주소를 입력해주세요."
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
