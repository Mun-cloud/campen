import style from "styled-components";

const UserSettingMenu = () => {
  return (
    <>
      {/* <!-- 세부세팅기능 --> */}
      <label class="img-upload" for="upload-button">
        <div class="user-div">프로필 사진 변경</div>
        <input type="file" id="upload-button" accept="image/*" />
      </label>

      <a href="./setting-pages/nickname-set.html" class="nickname-set">
        <div class="nickname user-div">
          닉네임
          <span> 인생한번</span>
        </div>
      </a>

      <div class="id user-div">
        아이디
        <span> ssonnni</span>
      </div>

      <a href="./setting-pages/password-set.html" class="password-set">
        <div class="password user-div">
          비밀번호
          <span>**********</span>
        </div>
      </a>

      <div class="email user-div">
        이메일
        <span> sohyun@gmail.com</span>
      </div>

      <div class="phone user-div">
        휴대폰 번호
        <span>010-1234-5678</span>
      </div>

      <a href="./setting-pages/sns.html" class="sns-set">
        <div class="sns user-div">SNS</div>
      </a>

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
