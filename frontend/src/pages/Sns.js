import styled from "styled-components";
import BasicHeaderBar from "../components/BasicHeaderBar";
import SubSettingButton from "../components/UserSetting/SubUserSettingMenu/SubSettingButton";

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

const Password = () => {
  return (
    <>
      <UserContainer>
        {/* <!-- 헤더 --> */}

        <BasicHeaderBar title="SNS 설정"></BasicHeaderBar>

        <Cnt>
          {/*  <!-- 타이틀영역 --> */}
          <div className="title">
            <div>SNS를</div>
            <div>입력해주세요.</div>
          </div>

          {/*  <!-- 컨테츠영역 --> */}

          <input
            placeholder="인스타그램 아이디를 입력해주세요."
            type="text"
            name="user-intro"
          />
          <hr
            className="password"
            style={{ border: "solid 0.5px rgb(211, 211, 211)" }}
          />

          <input
            placeholder="블로그 주소를 입력해주세요."
            type="text"
            name="user-intro"
          />
          <hr
            className="password"
            style={{ border: "solid 0.5px rgb(211, 211, 211)" }}
          />
        </Cnt>

        <SubSettingButton />
      </UserContainer>
    </>
  );
};

export default Password;
