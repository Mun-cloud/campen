const IndexEventSlide = () => {
  return (
    // <!-- 이벤트 슬라이드 -->
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <a href="/camp">
              <img
                src={require("../../assets/img/event_slide_08.png")}
                alt="장박 캠핑장"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a href="/camp">
              <img
                src={require("../../assets/img/event_slide_09.png")}
                alt="반려동물 캠핑장"
              />
            </a>
          </li>
          <li className="glide__slide">
            <a href="/camp">
              <img
                src={require("../../assets/img/event_slide_10.png")}
                alt="치유 캠핑장"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  );
};

export default IndexEventSlide;
