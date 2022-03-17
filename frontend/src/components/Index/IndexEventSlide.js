import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";

SwiperCore.use([Autoplay, Pagination]);

const SwiperImg = styled.img`
  width: 100%;
`;

const IndexEventSlide = () => {
  return (
    // <!-- 이벤트 슬라이드 -->
    <Swiper
      spaceBetween={0}
      slidesPerView={"auto"}
      loopedSlides={3}
      longSwipesMs={300}
      loop={true}
      speed={400}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="glide__slide slider">
        <a href="/camp">
          <SwiperImg
            src={require("../../assets/img/event_slide_08.png")}
            alt="장박 캠핑장"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="glide__slide slider">
        <a href="/camp">
          <SwiperImg
            src={require("../../assets/img/event_slide_09.png")}
            alt="반려동물 캠핑장"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide className="glide__slide slider">
        <a href="/camp">
          <SwiperImg
            src={require("../../assets/img/event_slide_10.png")}
            alt="치유 캠핑장"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default IndexEventSlide;
