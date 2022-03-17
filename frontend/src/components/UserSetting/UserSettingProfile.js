import style from "styled-components";

const UserSettingProfile = () => {
  return (
    <>
      {/* <!-- 유저프로필 --> */}
      <div class="user-profile">
        <img src="../commu/img/user-img.png" alt="프로필" />
        <div class="user-name">인생한번</div>
        <a class="user-intro" href="#">
          <p>나는 자연인을 꿈꿉니다.</p>
          <span class="material-icons"> edit</span>
        </a>
      </div>
    </>
  );
};

export default UserSettingProfile;
