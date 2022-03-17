import style from "styled-components";

const MyLoginProfile = () => {
  return (
    <>
      {/*  <!-- 유저 마이 프로필 --> */}
      <a href="./user-setting.html">
        <div class="my-profile">
          <img src="./img/user-img.png" alt="상" />
          <div class="my-user">
            <h3 class="my-user-name">인생한번</h3>
            <p class="my-user-intro">
              나는 자연인을 꿈꿉니다.
              <span class="material-icons-outlined">arrow_forward_ios</span>
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default MyLoginProfile;
