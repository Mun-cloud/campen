import { Route, Routes } from "react-router-dom";
import BasicHeaderBar from "../components/BasicHeaderBar";
import NoticeArticle from "../components/Notice/NoticeArticle";
import NoticeList from "../components/Notice/NoticeList";

const Notice = () => {
  return (
    <div>
      <BasicHeaderBar title="공지사항" />
      <Routes>
        <Route path="/" element={<NoticeList />} />
        <Route path="/:id" element={<NoticeArticle />} />
      </Routes>

      <div className="pop_view_more">
        <div>더보기</div>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Notice;
