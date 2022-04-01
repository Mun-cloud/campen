import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BasicHeaderBar from "../components/BasicHeaderBar";
import NoticeArticle from "../components/Notice/NoticeArticle";
import NoticeList from "../components/Notice/NoticeList";

const Container = styled.div`
  padding: 0;
  height: 100vh;

  .notice_box {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    justify-content: space-between;
    border-bottom: 1px solid rgb(234, 238, 236);
  }

  .notice_info {
    line-height: 20px;
  }

  .notice_title {
    font-size: 15px;
  }

  .notice_date {
    color: rgb(133, 138, 136);
    font-weight: 500;
    font-size: 12px;
  }

  .notice_chev {
    font-size: 17px;
  }

  .pop_view_more {
    background-color: rgba(0, 0, 0, 0);
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: rgb(133, 138, 136);
  }

  .pop_view_more div {
    font-size: 13px;
    padding-bottom: 5px;
  }

  .pop_view_more i {
    font-size: 10px;
  }

  .notice_article_title {
    padding-bottom: 16px;
    border-bottom: 1px solid rgb(234, 238, 236);
    font-size: 15px;
    font-weight: 700;
  }

  .notice_article_article {
    padding-top: 16px;
    font-size: 15px;
    line-height: 26px;
    word-break: break-all;
  }
`;

const Notice = () => {
  return (
    <Container>
      <BasicHeaderBar title="공지사항" />
      <Routes>
        <Route path="/" element={<NoticeList />} />
        <Route path="/:id" element={<NoticeArticle />} />
      </Routes>

      <div className="pop_view_more">
        <div>더보기</div>
        <i className="fas fa-chevron-down"></i>
      </div>
    </Container>
  );
};

export default Notice;
