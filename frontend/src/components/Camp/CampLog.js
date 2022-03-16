const CampLog = () => {
  return (
    <section className="camp_container log_container" id="camp_log">
      <div className="log_header">
        <div className="box_title">
          캠핑로그
          <span>187</span>
        </div>
        <div className="check_box">
          <input type="checkbox" id="photo_log" />
          <span id="photo_log_text">포토 로그만 보기</span>
        </div>
      </div>
      <div>
        <div className="log_box">
          <div className="log_title">
            <div className="user_icon">
              <i className="far fa-user-circle"></i>
            </div>
            <div>
              <div className="log_username">캠퍼68688</div>
              <div className="log_data">
                <span className="log_view">12</span>·
                <span className="log_date">2022.01.25</span>
              </div>
            </div>
            <div className="log_chev">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <a className="log_sample_box" href="#">
            <div className="log_article">
              샤워실 시설이 협소한걸 제외하고 모두 만족스러운 캠핑이었습니다.
              샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.
            </div>
            <div className="log_photo">
              <img src="https://via.placeholder.com/100x100" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="log_btn_box">
        <button className="camp_btn" id="log_btn">
          캠핑로그 더보기
        </button>
      </div>
    </section>
  );
};

export default CampLog;
