import axios from "axios";
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

const like = async (user_id, content_id) => {
  try {
    await axios.post("/content_like/like", {
      user_id,
      content_id,
    });
  } catch (err) {
    console.error(err);
  }
};

const CommuCntFooter = ({ id }) => {
  return (
    <div>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CntFooter>
        <div className="cnt-like" onClick={() => like(id)}>
          <i className="far fa-heart"></i>
          좋아요
        </div>
        <div className="cnt-comment">
          <i className="far fa-comment"></i>
          댓글쓰기
        </div>
      </CntFooter>
    </div>
  );
};

export default CommuCntFooter;
