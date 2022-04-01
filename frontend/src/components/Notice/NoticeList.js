import { useState } from "react";
import { Link } from "react-router-dom";

const NoticeList = ({ data }) => {
  const [viewMore, setViewMore] = useState(4);
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
                  <div className="notice_date">{v.reg_date}</div>
                </div>
                <div className="notice_chev">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </Link>
          ))}
      </div>
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
