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
  return (
    <CntFooter>
      {/* 좋아요 수 */}
      <div className="cnt-like">
        <i className="far fa-heart"></i> {content.likesCount}
      </div>
      {/* 댓글 수 */}
      {hide ? null : (
        <div className="cnt-comment">
          <i className="far fa-comment"></i> {content.commentsCount}
        </div>
      )}
    </CntFooter>
  );
};

export default ProfileCntFooter;
