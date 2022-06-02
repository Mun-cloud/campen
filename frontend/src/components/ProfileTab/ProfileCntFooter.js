import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeBtn from "../LikeBtn";

const CntFooter = styled.div`
  display: flex;
  font-size: 9pt;
  color: rgb(159, 165, 162);
  font-weight: 400;
  padding: 10px 0;

  i {
    margin-right: 3px;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cnt-comment {
    margin-left: 15px;
  }
`;

const ProfileCntFooter = ({ hide = false, content }) => {
  useEffect(() => console.log(content), [content]);
  return (
    <CntFooter>
      {/* 좋아요 버튼 */}
      <LikeBtn content={content} />
      {/* 댓글쓰기 버튼 */}
      {hide ? null : (
        <Link to={`/board/${content.id}`}>
          {content.likesCount}
          <div className="cnt-comment">
            <i className="far fa-comment"></i> 댓글쓰기 {content.commentsCount}
          </div>
        </Link>
      )}
    </CntFooter>
  );
};

export default ProfileCntFooter;
