const CampSwiperScroll = () => {
  return (
    <div className="swiper scroll_box">
      <div className="swiper-wrapper scroll_box">
        <div className="scroll_link swiper-slide">
          <a href="#basic_info">기본 정보</a>
        </div>
        <div className="scroll_link swiper-slide">
          <a href="#camp_intro">캠핑장 소개</a>
        </div>
        <div className="scroll_link swiper-slide">
          <a href="#facility">시설 및 레저</a>
        </div>
        <div className="scroll_link swiper-slide">
          <a href="#manner_time">매너타임</a>
        </div>
        <div className="scroll_link swiper-slide">
          <a href="#camp_policy">운영정책</a>
        </div>
        <div className="scroll_link swiper-slide">
          <a href="#camp_map">캠핑존 배치도</a>
        </div>
        <div className="scroll_link swiper-slide">
          <a href="#camp_log">캠핑로그</a>
        </div>
      </div>
    </div>
  );
};

export default CampSwiperScroll;
