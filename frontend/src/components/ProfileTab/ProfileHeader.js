import style from "styled-components";

const ProfileHeader = () => {
  return (
    <>
      {/* <!-- 헤더 --> */}
      <header class="profile-header">
        <a href="#">
          <span class="material-icons-outlined">arrow_back_ios</span>
        </a>
        <p>프로필</p>
      </header>
    </>
  );
};

export default ProfileHeader;
