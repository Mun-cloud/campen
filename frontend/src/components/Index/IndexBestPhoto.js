const IndexBestPhoto = () => {
  return (
    <div id="photo">
      <div className="area_title">
        <div className="area_title_left">캠핑 Best Photo</div>
        <a href="join.html" className="area_title_btn">
          <i className="fas fa-camera"></i>
          업로드
        </a>
      </div>
      <a href="join.html" className="commu_link" data_commu="photo">
        <span>
          캠핑 다녀오셨나요?
          <br />
        </span>
        <span>
          나만의 추억을 남겨보세요. <i className="fas fa-chevron-right"></i>
        </span>
      </a>
      {/* <!-- Best Photo 슬라이드 --> */}
      <div className="slide_box swiper">
        <ul id="photo_slides" className="swiper-wrapper">
          <li className="swiper-slide">
            <a href="/community">
              <img src="./img/best_photo-13.jpeg" alt="lll" />
              <span>꽃언니</span>
            </a>
          </li>
          <li className="swiper-slide">
            <a href="/community">
              <img src="./img/best_photo-14.jpeg" alt="lll" />
              <span>도도캠핑</span>
            </a>
          </li>
          <li className="swiper-slide">
            <a href="/community">
              <img src="./img/best_photo-15.jpeg" alt="lll" />
              <span>마루캠핑</span>
            </a>
          </li>
          <li className="swiper-slide">
            <a href="/community">
              <img src="./img/best_photo-16.jpeg" alt="lll" />
              <span>nl0607</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndexBestPhoto;
