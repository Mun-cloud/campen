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
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="glide__slide">
        <Link to="/camp">
          <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">경기 용인시</span>
          </span>
        </Link>
      </SwiperSlide>
    </MySwiper>
  );
};

export default SearchSwiper;
