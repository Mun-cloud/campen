import style from "styled-components";

const ProfileTabmenu = () => {
  return (
    <>
      {/* <!-- 메뉴 --> */}
      <ul class="tab-container">
        <li class="tab-item active" data-tab="tab1">
          <a class="tab-title" href="./profile1.html">
            게시글 1
          </a>
        </li>
        <li class="tab-item" data-tab="tab2">
          <a class="tab-title" href="./profile1-2.html">
            캠핑후기 1
          </a>
        </li>
      </ul>
    </>
  );
};

export default ProfileTabmenu;
