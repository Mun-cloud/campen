import style from "styled-components";
import { Navlink } from "react-router-dom";
import Password from "./SubUserSettingMenu/Sns";
import NickName from "./SubUserSettingMenu/NickName";
import Sns from "./SubUserSettingMenu/Sns";

const UserSettingMenu = () => {
  return (
    <>
      {/* <!-- 세부세팅기능 --> */}
      <label class="img-upload" for="upload-button">
        <div class="user-div">프로필 사진 변경</div>
        <input type="file" id="upload-button" accept="image/*" />
      </label>

      <Navlink to="./SubUserSettingMenu/NickName">
        <div class="nickname user-div">
          닉네임
          <span> 인생한번</span>
        </div>
      </Navlink>

      <div class="id user-div">
        아이디
        <span> ssonnni</span>
      </div>

      <Navlink to="./SubUserSettingMenu/Sns">
        <div class="password user-div">
          비밀번호
          <span>**********</span>
        </div>
      </Navlink>

      <div class="email user-div">
        이메일
        <span> sohyun@gmail.com</span>
      </div>

      <div class="phone user-div">
        휴대폰 번호
        <span>010-1234-5678</span>
      </div>

      <Navlink to="./SubUserSettingMenu/Sns">
        <div class="sns user-div">SNS</div>
      </Navlink>

      <div class="event-set user-div">
        <div class="event">
          이벤트/마케팅 수신 동의
          <p>회원가입 시 설정됨</p>
        </div>
        <div>
          <span class="material-icons">toggle_on</span>
        </div>
      </div>
    </>
  );
};

export default UserSettingMenu;
