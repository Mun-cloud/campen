import Swiper from "swiper";
import "swiper/css";

const IndexCamplog = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
  });
  return (
    <div id="camp_log">
      <div className="area_title">
        <div className="area_title_left">캠핑로그</div>
        <a href="join.html" className="area_title_btn">
          <i className="fas fa-pen"></i>
          글쓰기
        </a>
      </div>
      <a href="join.html" className="commu_link" data_commu="log">
        <span>
          캠핑 다녀오셨나요?
          <br />
        </span>
        <span>
          나만의 캠핑 포스트를 남겨보세요.{" "}
          <i className="fas fa-chevron-right"></i>
        </span>
      </a>
      <div className="slide_box swiper">
        <ul id="log_slides" className="swiper-wrapper">
          <li className="swiper-slide">
            <a href="#">
              <div className="log_slide">
                <div
                  className="log_img_box"
                  style={{ backgroundImage: "url('./img/log-1.jpeg');" }}
                ></div>
                <div className="log_text_box">
                  <span className="log_writer">캠퍼77964</span>
                  <span className="log_camp">
                    <i className="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
          <li className="swiper-slide">
            <a href="#">
              <div className="log_slide">
                <div
                  className="log_img_box"
                  style={{ backgroundImage: "url('./img/log-2.jpeg');" }}
                ></div>
                <div className="log_text_box">
                  <span className="log_writer">캠퍼77964</span>
                  <span className="log_camp">
                    <i className="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
          <li className="swiper-slide">
            <a href="#">
              <div className="log_slide">
                <div
                  className="log_img_box"
                  style={{ backgroundImage: "url('./img/log-3.jpeg');" }}
                ></div>
                <div className="log_text_box">
                  <span className="log_writer">캠퍼77964</span>
                  <span className="log_camp">
                    <i className="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
          <li className="swiper-slide">
            <a href="#">
              <div className="log_slide">
                <div
                  className="log_img_box"
                  style={{ backgroundImage: "url('./img/log-4.jpeg');" }}
                ></div>
                <div className="log_text_box">
                  <span className="log_writer">캠퍼77964</span>
                  <span className="log_camp">
                    <i className="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndexCamplog;
