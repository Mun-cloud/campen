import styled from "styled-components";
import BasicHeaderBar from "../components/BasicHeaderBar";
import SubSettingButton from "../components/UserSetting/SubUserSettingMenu/SubSettingButton";

const UserContainer = styled.div`
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightGray};

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const Cnt = styled.div`
  padding: 20px;
  height: 670px;
  background: ${(props) => props.theme.white};

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
        <BasicHeaderBar title="비밀번호 재설정"></BasicHeaderBar>

        <Cnt>
          {/*  <!-- 타이틀영역 --> */}
          <div className="title">
            <div>새로운 비밀번호로</div>
            <div>재설정 해주세요.</div>
          </div>

          {/*  <!-- 컨텐츠영역 --> */}
          <input placeholder="기존 비밀번호" type="text" name="user-intro" />
          <hr
            className="password"
            style={{ border: "solid 0.5px rgb(211, 211, 211)" }}
          />

          <input placeholder="새로운 비밀번호" type="text" name="user-intro" />
          <hr style={{ border: "solid 0.5px rgb(211, 211, 211)" }} />
          <div className="new-password">8자 이상, 숫자와 영문 필수 포함</div>

          <input
            placeholder="새로운 비밀번호 재입력"
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
