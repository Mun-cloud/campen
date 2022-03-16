const NoticeList = () => {
  return (
    <div className="pop_main">
      <a href="#">
        <div className="notice_box" data-notice="notice-1.html">
          <div className="notice_info">
            <div className="notice_title">
              2022년 설 연휴 휴무(고객센터 포함) 공지
            </div>
            <div className="notice_date">2022.01.28</div>
          </div>
          <div className="notice_chev">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="notice_box">
          <div className="notice_info">
            <div className="notice_title">
              [서버 점검] 12월 22일(수) 새벽 00시 ~ 05시 이용 불가 안내
            </div>
            <div className="notice_date">2021.12.21</div>
          </div>
          <div className="notice_chev">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="notice_box">
          <div className="notice_info">
            <div className="notice_title">
              (수정) 12월 16일(목) 빈자리 알림 기능 미작동 관련 안내드립니다.{" "}
            </div>
            <div className="notice_date">2021.12.16</div>
          </div>
          <div className="notice_chev">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="notice_box">
          <div className="notice_info">
            <div className="notice_title">
              [신기능 안내] 또 한 번 편해진 캠핏을 만나보세요👉
            </div>
            <div className="notice_date">2021.11.16</div>
          </div>
          <div className="notice_chev">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NoticeList;
