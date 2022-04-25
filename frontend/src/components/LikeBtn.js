import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LikeBtnBox = styled.div`
  align-items: center;
  cursor: pointer;
`;

const LikeBtn = ({ content }) => {
  const [heartOn, setHeartOn] = useState(false);
  const { loading, item } = useSelector((state) => state.user);

  if (item.contentLikes.includes(content.id)) {
    setHeartOn(true);
  }

  const onClick = async () => {
    if (heartOn) {
      await axios.delete("content_like/like", {
        data: {
          user_id: item.id,
          content_id: content.id,
        },
      });
      setHeartOn(false);
    } else {
      await axios.post("content_like/like", {
        user_id: item.id,
        content_id: content.id,
      });
      setHeartOn(true);
    }
  };

  if (loading) return null;

  return (
    <LikeBtnBox className="cnt-like" onClick={onClick}>
      <i className={heartOn ? "fas fa-heart" : "far fa-heart"}></i> 좋아요
    </LikeBtnBox>
  );
};

export default LikeBtn;
