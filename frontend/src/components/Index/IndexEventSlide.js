import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/pagination";
import { useQuery } from "react-query";
import { getExhibition } from "../../api";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination]);

const SwiperImg = styled.img`
  width: 100%;
`;

const IndexEventSlide = () => {
  const BACK = process.env.REACT_APP_BACK;
  const { isLoading, data } = useQuery("allExhibition", getExhibition);

  return (
    // <!-- 이벤트 슬라이드 -->
    <Swiper
      spaceBetween={0}
      slidesPerView={"auto"}
      loopedSlides={3}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
    >
      {!isLoading &&
        data.map((v) => (
          <SwiperSlide className="glide__slide slider" key={v.id}>
            <Link to={`/exhibition/${v.id}`}>
              <SwiperImg src={BACK + v.photo} alt={v.title} />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default IndexEventSlide;
