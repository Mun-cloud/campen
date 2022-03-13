import styled from "styled-components";

const SubDetailProfile = () => {
  return (
    <div>
      {/* 프로필, 컨텐츠 업로드 시간 */}
      <div class="cnt-category">캠핑후기</div>
      <ul class="cnt-profile">
        <a href="../profile1-2.html">
          <li class="cnt-user">
            <img
              class="cnt-user-img"
              src="../img/user-img.png"
              alt="캠퍼1103"
            />
            <span class="cnt-user-name">캠퍼1103</span>
          </li>
        </a>
        <li class="cnt-time">40분 전</li>
      </ul>
    </div>
  );
};

export default SubDetailProfile;
