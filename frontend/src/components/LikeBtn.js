import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LikeBtnBox = styled.div`
  align-items: center;
  cursor: pointer;

  .fas {
    color: red;
  }
`;

const LikeBtn = ({ content }) => {
  const [heartOn, setHeartOn] = useState(false);
  const { loading, item } = useSelector((state) => state.user);

  // 유저의 좋아요 정보에 따라 하트 채우기
  useEffect(() => {
    if (item) {
      if (
        item.contentLikes.find((v) => v.contents_id === content.id) !==
        undefined
      ) {
        setHeartOn(true);
      }
    }
  }, [content.id, item]);

  const onClick = async () => {
    if (!item) {
      alert("로그인 후 이용해주시기 바랍니다.");
      return;
    }

    if (heartOn) {
      try {
        await axios.delete("/content_like/like", {
          data: {
            user_id: item.id,
            content_id: content.id,
          },
        });
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
      setHeartOn(false);
    } else {
      try {
        await axios.post("/content_like/like", {
          user_id: item.id,
          content_id: content.id,
        });
        setHeartOn(true);
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
    }
  };

  if (loading) return null;

  return (
    <LikeBtnBox className="cnt-like" onClick={onClick}>
      <i className={heartOn ? "fas fa-heart" : "far fa-heart"}></i> 좋아요{" "}
      {!content.likes ? null : content.likes}
    </LikeBtnBox>
  );
};

export default LikeBtn;
