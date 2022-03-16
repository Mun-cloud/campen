const CampImgSlide = () => {
  return (
    <div class="glide camp_slide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <img src={require("../../assets/img/search_slide-1.jpg")} alt="" />
            <span>
              <i class="fas fa-map-marker-alt"></i>
              <span id="profile_local">경기 용인시</span>
            </span>
          </li>
          <li class="glide__slide">
            <img src={require("../../assets/img/search_slide-2.jpg")} alt="" />
            <span>
              <i class="fas fa-map-marker-alt"></i>
              <span id="profile_local">경기 용인시</span>
            </span>
          </li>
          <li class="glide__slide">
            <img src={require("../../assets/img/search_slide-3.jpeg")} alt="" />
            <span>
              <i class="fas fa-map-marker-alt"></i>
              <span id="profile_local">경기 용인시</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  );
};

export default CampImgSlide;
