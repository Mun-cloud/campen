import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

const MySwiper = styled(Swiper)`
  width: 100%;
  cursor: pointer;

  .glide__slide {
    height: 100%;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    i {
      margin-right: 3px;
    }
    a > span {
      position: absolute;
      left: 10px;
      bottom: 12px;
      color: white;
      font-size: 11px;
      z-index: 10;
    }
  }
`;

const CampImgSlide = () => {
  return (
    <MySwiper
      navigation={true}
      spaceBetween={0}
      slidesPerView={"auto"}
      loop={true}
      centeredSlides={true}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
      class="glide camp_slide"
    >
      <SwiperSlide class="glide__slide">
        <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
        <span>
          <i class="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide class="glide__slide">
        <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
        <span>
          <i class="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide class="glide__slide">
        <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
        <span>
          <i class="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>

      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </MySwiper>
  );
};

export default CampImgSlide;
