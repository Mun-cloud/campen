import style from "styled-components";

const UserSettingHeader = () => {
  return (
    <>
      {/* <!-- 헤더 --> */}
      <header class="user-header">
        <a href="./my-login.html">
          <span class="material-icons-outlined">arrow_back_ios</span>
        </a>
        <p>내 정보 관리</p>
      </header>
    </>
  );
};

export default UserSettingHeader;
