import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { FreeMode } from "swiper";
import "swiper/css"; //basic
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import IndexSectionTitle from "./IndexSectionTitle";

SwiperCore.use([FreeMode]);

const BestSwiper = styled(Swiper)`
  a {
    position: relative;
  }

  .swiper-slide {
    width: fit-content;
  }

  img {
    width: 195px;
    height: 250px;
    border-radius: 8px;
    margin-right: 10px;
  }

  span {
    position: absolute;
    left: 13px;
    bottom: 18px;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`;

const IndexBestPhoto = () => {
  return (
    <div>
      <IndexSectionTitle
        mt="40px"
        title="캠핑 Best Photo"
        btn="업로드"
        sub1="캠핑 다녀오셨나요?"
        sub2="나만의 추억을 남겨보세요. "
        url="/login"
      />
      {/* <!-- Best Photo 슬라이드 --> */}
      <BestSwiper freeMode={true} slidesPerView={"auto"}>
        <SwiperSlide className="swiper-slide">
          <Link to="/community">
            <img
              src={require("../../assets/img/best_photo-13.jpeg")}
              alt="꽃언니"
            />
            <span>꽃언니</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Link to="/community">
            <img
              src={require("../../assets/img/best_photo-14.jpeg")}
              alt="도도캠핑"
            />
            <span>도도캠핑</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Link to="/community">
            <img
              src={require("../../assets/img/best_photo-15.jpeg")}
              alt="마루캠핑"
            />
            <span>마루캠핑</span>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Link to="/community">
            <img
              src={require("../../assets/img/best_photo-16.jpeg")}
              alt="nl0607"
            />
            <span>nl0607</span>
          </Link>
        </SwiperSlide>
      </BestSwiper>
    </div>
  );
};

export default IndexBestPhoto;
