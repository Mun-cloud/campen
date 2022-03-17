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
          <p>닉네임 변경</p>
        </SubSettingHeader>

        <div class="setting-cnt">
          {/*  <!-- 타이틀영역 --> */}
          <SubSettingTitle>
            <div>새로운 닉네임으로</div>
            <div>재설정 해주세요.</div>
          </SubSettingTitle>

          {/*  <!-- 컨텐츠 영역  --> */}
          <div class="setting-cnt">
            <div class="cnt-text">
              <div>새로운 닉네임을</div>
              <div>입력해주세요.</div>
            </div>
            <input
              placeholder="변경할 닉네임을 입력해주세요."
              type="text"
              name="user-intro"
            />
            <hr style="border: solid 0.5px rgb(211, 211, 211);" />
          </div>
        </div>

        <SubSettingButton />
      </div>
    </>
  );
};

export default NickName;
