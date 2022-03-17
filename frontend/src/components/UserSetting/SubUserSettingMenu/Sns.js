import style from "styled-components";
import SubSettingHeader from "../SubUserSettingMenu/SubSettingHeader";
import SubSettingTitle from "../SubUserSettingMenu/SubSettingTitle";
import SubSettingButton from "../SubUserSettingMenu/SubSettingButton";

const Password = () => {
  return (
    <>
      <div class="user-container">
        {/* <!-- 헤더 --> */}
        <SubSettingHeader>
          <p>SNS 설정</p>
        </SubSettingHeader>

        <div class="setting-cnt">
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
        </div>

        <SubSettingButton />
      </div>
    </>
  );
};

export default Password;
