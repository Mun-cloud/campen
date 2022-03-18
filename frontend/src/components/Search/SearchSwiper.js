import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const MySwiper = styled(Swiper)`
  width: 100%;
`;
const SearchSwiper = () => {
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
      className="glide"
    >
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
        <span>
          <i className="fas fa-map-marker-alt"></i>
          <span id="profile_local">경기 용인시</span>
        </span>
      </SwiperSlide>
    </MySwiper>
  );
};

export default SearchSwiper;
