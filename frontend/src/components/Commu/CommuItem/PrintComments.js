import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ItemCommentMenu from "./ItemCommentMenu";

const CommentBox = styled.section`
  margin-top: 24px;
  padding: 25px 16px 0px;
  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: rgb(241, 245, 243);
  background: transparent;
  pointer-events: auto;
`;
const UserTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 50%;
    border: 0.5px solid rgb(201, 207, 204);
    background-clip: border-box;
    object-fit: cover;
    opacity: 1;
  }

  > div {
    display: flex;
    align-items: center;
  }

  > div > div {
    margin-left: 4px;
  }
  > div > div div {
    -webkit-box-align: center;
    align-items: center;
  }
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 3px;
`;

const RegDate = styled.div`
  margin-top: 1px;
  color: rgb(159, 165, 162);
  font-weight: 500;
  font-size: 12px;
`;

const CommentArticle = styled.div`
  margin: 17px 32px 16px 44px;
  white-space: pre-line;
  font-size: 14px;
`;

const PrintComments = ({ comment }) => {
  const { item: user } = useSelector((state) => state.user);
  // UTC 시간 변환 기능
  const [reg, setReg] = useState();
  useEffect(() => {
    let dateObj = new Date(comment.reg_date);
    setReg(dateObj.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
  }, [comment]);
  console.log(comment);
  return (
    <CommentBox>
      <UserTitle>
        <div>
          <img
            src={
              comment.photo
                ? process.env.REACT_APP_BACK + comment.photo
                : require("../../../assets/img/user-img.png")
            }
            alt="캠퍼1103"
          />
          <div>
            <Name>
              {comment.nickname
                ? comment.nickname
                : `캠퍼${comment.members_id}`}
            </Name>
            <RegDate>{reg}</RegDate>
          </div>
        </div>
        {user.id !== comment.members_id ? null : (
          <ItemCommentMenu comment={comment} />
        )}
      </UserTitle>
      <CommentArticle>{comment.comment}</CommentArticle>
    </CommentBox>
  );
};

export default PrintComments;
