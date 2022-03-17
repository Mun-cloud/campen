import style from "styled-components";
import SubSettingHeader from "../SubUserSettingMenu/SubSettingHeader";
import SubSettingTitle from "../SubUserSettingMenu/SubSettingTitle";
import SubSettingButton from "../SubUserSettingMenu/SubSettingButton";

const NickName = () => {
  return (
    <>
      <div class="user-container">
        {/* <!-- 헤더 --> */}
        <SubSettingHeader>
          <p>비밀번호 변경</p>
        </SubSettingHeader>

        {/*  <!-- 컨텐츠 영역  --> */}
        <div class="setting-cnt">
          <SubSettingTitle>
            <div>새로운 비밀번호로</div>
            <div>재설정 해주세요.</div>
          </SubSettingTitle>

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
        </div>

        <SubSettingButton />
      </div>
    </>
  );
};

export default NickName;
