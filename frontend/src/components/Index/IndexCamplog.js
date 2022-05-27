import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { FreeMode } from "swiper";
import "swiper/css"; //basic
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import IndexSectionTitle from "./IndexSectionTitle";
import { useQuery } from "react-query";
import { getIndexCampLog } from "../../api";

SwiperCore.use([FreeMode]);

const CampLog = styled.div`
  margin-top: 50px;
`;

const LogSwiper = styled(Swiper)`
  margin: 10px 0;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    width: 140px;
    height: 250px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 10px;
    overflow: hidden;
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

  .log_img_box {
    height: 125px;
    width: 140px;
  }

  .log_text_box {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }

  .log_writer {
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 400;
  }

  .log_camp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인 수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    margin-bottom: 30px;
    font-size: 12px;
    font-weight: 400;

    i {
      margin-right: 3px;
    }
  }

  .log_text_box p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인 수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    font-size: 12px;
    font-weight: 400;
  }
`;

const IndexCamplog = () => {
  const BACK = process.env.REACT_APP_BACK;
  // react-query를 통한 ajax 연동
  const { isLoading, data } = useQuery("indexLog", getIndexCampLog);

  return isLoading ? null : (
    <CampLog id="camp_log">
      <IndexSectionTitle
        mt="50px"
        title="캠핑후기"
        btn="글쓰기"
        sub1="캠핑 다녀오셨나요?"
        sub2="나만의 캠핑 포스트를 남겨보세요. "
      />
      <LogSwiper freeMode={true} slidesPerView={"auto"}>
        {data.map((v) => (
          <SwiperSlide className="swiper-slide" key={v.id}>
            <Link to={`/board/${v.id}`}>
              <div className="log_slide">
                <img src={v.src} alt="게시글로 이동" className="log_img_box" />
                <div className="log_text_box">
                  <span className="log_writer">
                    {v.nickname ? v.nickname : `캠퍼${v.memberId}`}
                  </span>
                  <span className="log_camp"></span>
                  <p>{v.content}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </LogSwiper>
    </CampLog>
  );
};

export default IndexCamplog;
