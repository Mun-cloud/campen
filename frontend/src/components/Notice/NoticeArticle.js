import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;

  p {
    padding-bottom: 7px;
  }
`;

const NoticeArticle = ({ data }) => {
  const { id } = useParams();
  const notice = data.item.find((v) => v.id === parseInt(id));
  return (
    <Container className="pop_main notice">
      <div className="notice_article_title">{notice.title}</div>
      <div className="notice_article_article">
        {notice.content.split("\n").map((txt, i) => (
          <p key={i}>{txt}</p>
        ))}
      </div>
    </Container>
  );
};

export default NoticeArticle;
