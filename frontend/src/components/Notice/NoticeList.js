import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NoticeList = ({ data }) => {
  // 보여질 공지사항 수(pagenation)
  const [viewMore, setViewMore] = useState(4);
  // 배열값 UTC 시간 변환 기능
  const krReg = (data) => {
    let dateObj = new Date(data.reg_date);
    return dateObj.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  };
  return (
    <>
      <div className="pop_main">
        {data.item
          .sort((a, b) => b.id - a.id)
          .slice(0, viewMore)
          .map((v) => (
            <Link to={`${v.id}`} key={v.id}>
              <div className="notice_box" data-notice="notice-1.html">
                <div className="notice_info">
                  <div className="notice_title">{v.title}</div>
                  <div className="notice_date">{krReg(v)}</div>
                </div>
                <div className="notice_chev">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* 공지사항 더보기 버튼 */}
      {data.item.length <= viewMore ? null : (
        <div
          className="pop_view_more"
          onClick={() => {
            setViewMore(viewMore + 4);
          }}
        >
          <div>더보기</div>
          <i className="fas fa-chevron-down"></i>
        </div>
      )}
    </>
  );
};

export default NoticeList;
