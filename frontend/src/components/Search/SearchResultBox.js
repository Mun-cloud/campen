import { Link } from "react-router-dom";

const SearchResultBox = () => {
  return (
    <Link to="/camp/1">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-1.jpg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-2.jpg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-3.jpeg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-1.jpg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-2.jpg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-3.jpeg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-1.jpg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-2.jpg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
            <li className="glide__slide">
              <img
                src={require("../../assets/img/search_slide-3.jpeg")}
                alt=""
              />
              <span>
                <i className="fas fa-map-marker-alt"></i>
                <span id="profile_local">경기 용인시</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
          <button className="glide__bullet" data-glide-dir="=2"></button>
          <button className="glide__bullet" data-glide-dir="=3"></button>
          <button className="glide__bullet" data-glide-dir="=4"></button>
          <button className="glide__bullet" data-glide-dir="=5"></button>
          <button className="glide__bullet" data-glide-dir="=6"></button>
          <button className="glide__bullet" data-glide-dir="=7"></button>
          <button className="glide__bullet" data-glide-dir="=8"></button>
        </div>
      </div>
      <div className="result_info">
        <div className="result_text">
          <div className="rusult_info">
            <div id="camp_class">오토캠핑 글램핑 펜션</div>
            <div id="camp_name">구봉산오토캠핑장 나인힐스</div>
          </div>
          <div id="camp_log_box">
            캠핑로그 <span id="camp_log_count">184</span>개
          </div>
        </div>
        <div className="result_charge">
          <span id="charge">40,000</span>원 부터
        </div>
      </div>
    </Link>
  );
};

export default SearchResultBox;
