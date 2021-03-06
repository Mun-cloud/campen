import styled from "styled-components";
import LikeBtn from "../LikeBtn";

const CntFooter = styled.div`
  display: flex;
  padding: 14px 15px;
  font-size: 10pt;
  color: #666;
  font-weight: 400;
  background-color: #fff;
  margin-bottom: 8px;

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

  i {
    margin-right: 4px;
  }
`;

const CommuCntFooter = ({ data, comment = true }) => {
  return (
    <div>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CntFooter>
        {!data ? null : <LikeBtn content={data} />}
        {!comment ? null : (
          <div className="cnt-comment" href="#">
            <i className="far fa-comment"></i>
            댓글 {data.commentsCount}
          </div>
        )}
      </CntFooter>
    </div>
  );
};

export default CommuCntFooter;
