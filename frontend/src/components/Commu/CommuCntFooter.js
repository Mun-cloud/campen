import styled from "styled-components";

const CntFooter = styled.div`
  display: flex;
  padding: 14px 15px;
  font-size: 10pt;
  color: #666;
  font-weight: 400;

  .cnt-like {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cnt-comment {
    display: flex;
    align-items: center;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const CommuCntFooter = () => {
  return (
    <div>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CntFooter>
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
      </CntFooter>
    </div>
  );
};

export default CommuCntFooter;
