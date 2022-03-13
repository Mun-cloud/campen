import styled from "styled-components";

const SubDetailCntFooter = () => {
  return (
    <div>
      {/*  <!-- 컨텐츠:좋아요--> */}
      <div class="cnt-footer">
        <div clsss="cnt-like" href="#">
          <a href="#">
            <i class="far fa-heart"></i>
            좋아요
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubDetailCntFooter;
