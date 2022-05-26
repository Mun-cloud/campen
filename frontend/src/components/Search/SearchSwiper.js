import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getImageList } from "../../api";
import { useEffect, useState } from "react";

SwiperCore.use([Navigation, Pagination]);

const MySwiper = styled(Swiper)`
  width: 100%;
  cursor: pointer;
  height: 298px;

  .swiper-button-next {
    color: white;
  }
  .swiper-button-prev {
    color: white;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }

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
  const [noimg, setNoimg] = useState(true);

  const { isLoading, data: pictures } = useQuery(
    ["getSlidePictuers", item.id],
    () => getImageList(item.id)
  );

  useEffect(() => {
    if (!isLoading) {
      if (pictures !== null && pictures[0]?.imageURL !== null) {
        setNoimg(false);
      }
    }
  }, [pictures]);

  if (isLoading) return null;

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
      {noimg ? (
        <SwiperSlide
          className="glide__slide"
          onClick={() => {
            go(`/camp/${item.id}`);
          }}
        >
          <img
            src={require("../../assets/img/no_camp_img.png")}
            alt={item.name}
          />
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span id="profile_local">{item.addr1}</span>
          </span>
        </SwiperSlide>
      ) : (
        pictures.map((v, i) => (
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
        ))
      )}
    </MySwiper>
  );
};

export default SearchSwiper;
