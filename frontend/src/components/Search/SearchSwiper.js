import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getImageList } from "../../api";

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
const SearchSwiper = ({ item }) => {
  const go = useNavigate();

  const { isLoading, data: pictures } = useQuery(
    ["getSlidePictuers", item.id],
    () => getImageList(item.id)
  );

  if (isLoading || pictures.length === 0 || pictures.imageURL === null)
    return null;
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
      {pictures.map((v, i) => (
        <SwiperSlide
          className="glide__slide"
          key={i}
          onClick={() => {
            go(`/camp/${item.id}`);
          }}
        >
          <img src={v.imageURL} alt={item.name} />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">{item.addr1}</span>
          </span>
        </SwiperSlide>
      ))}
    </MySwiper>
  );
};

export default SearchSwiper;
