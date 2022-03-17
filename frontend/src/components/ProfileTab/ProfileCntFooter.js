import style from "styled-components";

const ProfileCntFooter = () => {
  return (
    <>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <div class="cnt-footer">
        <div clsss="cnt-like" href="#">
          <a href="#">
            <i class="far fa-heart"></i>
            좋아요
          </a>
        </div>
        <div class="cnt-comment" href="#">
          <a href="#">
            <i class="far fa-comment"></i>
            댓글쓰기
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileCntFooter;
