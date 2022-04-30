import { Link } from "react-router-dom";
import styled from "styled-components";
import { getComments, getLikes } from "../../../api";
import LikeBtn from "../../LikeBtn";
import InputComment from "./InputComment";
import { useQuery } from "react-query";

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;

  .cnt-footer {
    display: flex;
    padding: 14px 15px;
    font-size: 10pt;
    color: #666;
    font-weight: 400;
    border-bottom: 1px solid rgb(241, 245, 243);
  }

  .cnt-comment {
    display: flex;
    align-items: center;
    margin-left: 15px;
    cursor: pointer;

    i {
      margin-right: 3px;
    }
  }

  /* 댓글영역 */
  .cmt-container {
    padding-bottom: 60px;
    width: 100%;
    background-color: #fff;
  }

  /* 댓글 상단 */
  .cmt1-box {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 0px 93px;
    color: rgb(187, 187, 187);
    flex: 1;
  }

  .cmt1-box span {
    font-size: 50px;
    margin-bottom: 15px;
  }

  .cmt1-box p {
    font-size: 10pt;
    margin-bottom: 6px;
  }

  .cmt1-box p:nth-child(2) {
    font-size: 15px;
    font-weight: 700;
  }
`;

const ItemCntFooter = ({ content }) => {
  // react-query를 통한 ajax 연동
  const { data: likes } = useQuery("getLikes", () => getLikes(content.id));
  const { isLoading, data: comments } = useQuery("comment", () =>
    getComments(content.id)
  );

  return (
    <Footer>
      <div className="cnt-footer">
        <LikeBtn content={content} />
        {likes?.item?.length}
        <div className="cnt-comment">
          <Link to={`/board/${content.id}/#comment`}>
            <i className="far fa-comment"></i>
            댓글쓰기 {comments?.length}
          </Link>
        </div>
      </div>

      {/* <!-- 댓글영역 --> */}
      {isLoading ? null : (
        <section className="cmt-container" id="comment">
          {/* <!-- 댓글 상단  --> */}
          {!comments?.item || comments?.item.length < 1 ? (
            <div className="cmt1-box">
              <span className="material-icons-outlined">textsms</span>
              <p>아직 댓글이 없어요.</p>
              <p>첫번째 댓글을 남겨보세요.</p>
            </div>
          ) : (
            <div className="cmt1-box"></div>
          )}

          {/* <!-- 댓글 하단 --> */}
          <InputComment />
        </section>
      )}
    </Footer>
  );
};

export default ItemCntFooter;
