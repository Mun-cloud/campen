import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const MySwiper = styled(Swiper)`
  width: 100%;
  cursor: pointer;
  height: 298px;

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
const SearchSwiper = ({ item, pictures }) => {
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
      {pictures !== undefined
        ? pictures.items.item.map((v, i) => (
            <SwiperSlide className="glide__slide" key={i}>
              <img src={v.imageUrl} alt={item.name} />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">{item.addr1}</span>
              </span>
            </SwiperSlide>
          ))
        : null}
    </MySwiper>
  );
};

export default SearchSwiper;
