import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { FreeMode } from "swiper";
import "swiper/css"; //basic
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import IndexSectionTitle from "./IndexSectionTitle";
import { getIndexCampCut } from "../../api";
import { useQuery } from "react-query";

SwiperCore.use([FreeMode]);

const BestSwiper = styled(Swiper)`
  a {
    position: relative;
  }

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-next {
    color: white;
  }
  .swiper-button-prev {
    color: white;
  }
  .swiper-pagination-bullet-active {
    background: white;
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
  // react-query를 통한 ajax 연동 - 캠핑한컷 query값(5) 개만 불러옴
  const { isLoading, data } = useQuery("indexCut", getIndexCampCut);

  return isLoading ? null : (
    <div>
      <IndexSectionTitle
        mt="40px"
        title="캠핑 Best Photo"
        btn="업로드"
        sub1="캠핑 다녀오셨나요?"
        sub2="나만의 추억을 남겨보세요. "
      />
      {/* <!-- Best Photo 슬라이드 --> */}
      <BestSwiper freeMode={true} slidesPerView={"auto"}>
        {data.map((v) => (
          <SwiperSlide className="swiper-slide" key={v.id}>
            <Link to={`/board/${v.id}`}>
              <img
                src={v.src}
                alt={v.nickname ? v.nickname : `캠퍼${v.memberId}`}
              />
              <span>{v.nickname ? v.nickname : `캠퍼${v.memberId}`}</span>
            </Link>
          </SwiperSlide>
        ))}
      </BestSwiper>
    </div>
  );
};

export default IndexBestPhoto;
