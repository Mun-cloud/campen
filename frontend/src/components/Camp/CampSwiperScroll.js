import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { FreeMode } from "swiper";
import "swiper/css"; //basic
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import styled from "styled-components";

SwiperCore.use([FreeMode]);

const SwiperBox = styled(Swiper)`
  height: 40px;
  background-color: #fff;
  margin-bottom: 10px;
  font-size: 13px;

  div {
    height: 100%;
    padding: 0 12px;
    width: auto;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const CampSwiperScroll = () => {
  return (
    <div className="swiper scroll_box">
      <SwiperBox freeMode={true} slidesPerView={"auto"}>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#basic_info">기본 정보</a>
        </SwiperSlide>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#camp_intro">캠핑장 소개</a>
        </SwiperSlide>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#facility">시설 및 레저</a>
        </SwiperSlide>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#manner_time">매너타임</a>
        </SwiperSlide>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#camp_policy">운영정책</a>
        </SwiperSlide>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#camp_map">캠핑존 배치도</a>
        </SwiperSlide>
        <SwiperSlide className="scroll_link swiper-slide">
          <a href="#camp_log">캠핑로그</a>
        </SwiperSlide>
      </SwiperBox>
    </div>
  );
};

export default CampSwiperScroll;
