import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
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
  console.log(user_id, content_id);
  try {
    const response = await axios.post("/content_like/like", {
      user_id,
      content_id,
    });

    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

const CommuCntFooter = ({ id }) => {
  const { item } = useSelector((state) => state.user);
  console.log(item);
  return (
    <div>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CntFooter>
        <div className="cnt-like" href="#">
          <i className="far fa-heart" onClick={() => like(id)}></i>
          좋아요
        </div>
        <div className="cnt-comment" href="#">
          <i className="far fa-comment"></i>
          댓글쓰기
        </div>
      </CntFooter>
    </div>
  );
};

export default CommuCntFooter;
