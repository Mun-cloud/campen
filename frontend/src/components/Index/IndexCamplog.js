import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { FreeMode } from "swiper";
import "swiper/css"; //basic
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import IndexSectionTitle from "./IndexSectionTitle";

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
    /* border: 1px solid black; */
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-right: 10px;
    overflow: hidden;
  }

  .log_img_box {
    height: 125px;
    width: 140px;
  }

  .log_text_box {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }

  .log_writer {
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 4px;
  }

  .log_camp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인 수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    margin-bottom: 30px;
  }

  .log_text_box p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인 수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

const IndexCamplog = () => {
  return (
    <CampLog id="camp_log">
      <IndexSectionTitle
        mt="50px"
        title="캠핑로그"
        btn="글쓰기"
        sub1="캠핑 다녀오셨나요?"
        sub2="나만의 캠핑 포스트를 남겨보세요. "
        url="/join"
      />
      <LogSwiper freeMode={true} slidesPerView={"auto"}>
        <SwiperSlide className="swiper-slide">
          <Link to="/">
            <div className="log_slide">
              <img
                src={require("../../assets/img/log-1.jpeg")}
                alt="캠핑로그"
                className="log_img_box"
              />
              <div className="log_text_box">
                <span className="log_writer">캠퍼77964</span>
                <span className="log_camp">
                  <i className="fas fa-map-marker-alt"></i>
                  동두천 돈내미캠핑장
                </span>
                <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Link to="/">
            <div className="log_slide">
              <img
                src={require("../../assets/img/log-2.jpeg")}
                alt="캠핑로그"
                className="log_img_box"
              />
              <div className="log_text_box">
                <span className="log_writer">캠퍼77964</span>
                <span className="log_camp">
                  <i className="fas fa-map-marker-alt"></i>
                  동두천 돈내미캠핑장
                </span>
                <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Link to="/">
            <div className="log_slide">
              <img
                src={require("../../assets/img/log-3.jpg")}
                alt="캠핑로그"
                className="log_img_box"
              />
              <div className="log_text_box">
                <span className="log_writer">캠퍼77964</span>
                <span className="log_camp">
                  <i className="fas fa-map-marker-alt"></i>
                  동두천 돈내미캠핑장
                </span>
                <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Link to="/">
            <div className="log_slide">
              <img
                src={require("../../assets/img/log-4.jpeg")}
                alt="캠핑로그"
                className="log_img_box"
              />
              <div className="log_text_box">
                <span className="log_writer">캠퍼77964</span>
                <span className="log_camp">
                  <i className="fas fa-map-marker-alt"></i>
                  동두천 돈내미캠핑장
                </span>
                <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </LogSwiper>
    </CampLog>
  );
};

export default IndexCamplog;
