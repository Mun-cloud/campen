import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InputCommentBox = styled.div`
  width: 100%;
  max-width: 530px;
  position: fixed;
  bottom: 60px;

  .form-box {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background: rgb(241, 245, 243);
    border-top: 1px solid ${(props) => props.theme.lightGray};
  }

  /* 이미지 업로드*/
  .photo {
    display: flex;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
    color: #777;
  }

  .upload {
    display: none;
  }

  /* 텍스트 업로드 */
  .textarea {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 12px;
    border: 0.5px solid ${(props) => props.theme.darkGray};
    border-radius: 8px;
    background: ${(props) => props.theme.white};

    textarea {
      overflow: hidden;
    }
  }

  .comment {
    width: 100%;
    height: auto;
    line-height: 1.5;
    overflow-wrap: break-word;
    border: none;
    background: none;
    resize: none;
    overflow: auto;
    font-size: 10pt;
    color: #999;
    outline: none;
  }

  .submit-btn {
    /* display: none; */
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    min-width: fit-content;
  }

  .submit-btn2 {
    font-size: 11pt;
    font-weight: 700;
    color: ${(props) => props.theme.mainColor};
    cursor: pointer;
  }

  .submit-btn2 button {
    width: 100%;
    height: 100%;
    padding-left: 12px;
    border: none;
    outline: 0px;
    cursor: pointer;
  }
`;

const InputComment = () => {
  const [text, setText] = useState();
  const { id: contentsId } = useParams();
  const { item: user } = useSelector((state) => state.user);

  const onClick = () => {
    (async () => {
      try {
        await axios.post(`/api/comments`, {
          comment: text,
          membersId: user.id,
          contentsId,
        });
        window.location.reload();
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
    })();
  };

  return (
    <InputCommentBox className="cmt2-box">
      <form className="form-box">
        {/* <!-- 텍스트 업로드 --> */}
        <div className="textarea">
          <textarea
            placeholder="댓글을 입력해주세요."
            className="comment"
            rows="1"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          ></textarea>
          {!text ? null : (
            <div
              color="primary80"
              className="submit-btn submit-btn2"
              onClick={onClick}
            >
              등록
            </div>
          )}
        </div>
      </form>
    </InputCommentBox>
  );
};

export default InputComment;
