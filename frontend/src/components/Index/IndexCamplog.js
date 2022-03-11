const IndexCamplog = () => {
  return (
    <div id="camp_log">
      <div class="area_title">
        <div class="area_title_left">캠핑로그</div>
        <a href="join.html" class="area_title_btn">
          <i class="fas fa-pen"></i>
          글쓰기
        </a>
      </div>
      <a href="join.html" class="commu_link" data_commu="log">
        <span>
          캠핑 다녀오셨나요?
          <br />
        </span>
        <span>
          나만의 캠핑 포스트를 남겨보세요. <i class="fas fa-chevron-right"></i>
        </span>
      </a>
      <div class="slide_box swiper">
        <ul id="log_slides" class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#">
              <div class="log_slide">
                <div
                  class="log_img_box"
                  style={{ backgroundImage: "url('./img/log-1.jpeg');" }}
                ></div>
                <div class="log_text_box">
                  <span class="log_writer">캠퍼77964</span>
                  <span class="log_camp">
                    <i class="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <div class="log_slide">
                <div
                  class="log_img_box"
                  style={{ backgroundImage: "url('./img/log-2.jpeg');" }}
                ></div>
                <div class="log_text_box">
                  <span class="log_writer">캠퍼77964</span>
                  <span class="log_camp">
                    <i class="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <div class="log_slide">
                <div
                  class="log_img_box"
                  style={{ backgroundImage: "url('./img/log-3.jpeg');" }}
                ></div>
                <div class="log_text_box">
                  <span class="log_writer">캠퍼77964</span>
                  <span class="log_camp">
                    <i class="fas fa-map-marker-alt"></i>
                    동두천 돈내미캠핑장
                  </span>
                  <p>차박을 할 수 있게 자리 마련해주신 캠장님 감사합니다.</p>
                </div>
              </div>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <div class="log_slide">
                <div
                  class="log_img_box"
                  style={{ backgroundImage: "url('./img/log-4.jpeg');" }}
                ></div>
                <div class="log_text_box">
                  <span class="log_writer">캠퍼77964</span>
                  <span class="log_camp">
                    <i class="fas fa-map-marker-alt"></i>
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
