const IndexExhibition = () => {
  return (
    <div id="exhibition">
      <a class="area_title" href="#">
        <div class="area_title_left">캠핑 기획전</div>
        <div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </a>
      <ul>
        <li class="exhi_list" data-exhi="seoul">
          <img src="./img/exhi_1.png" alt="서울근교 캠핑" />
          <div class="exhi_text">
            <span class="exhi_title">서울근교 캠핑</span>
            <span class="exhi_sub">가까운 곳으로 부담 없이 다녀오세요!</span>
          </div>
        </li>
        <li class="exhi_list" data-exhi="pet">
          <img src="./img/exhi_2.png" alt="반려동물 캠핑" />
          <div class="exhi_text">
            <span class="exhi_title">우리집 댕댕이랑 캠핑가요</span>
            <span class="exhi_sub">반려동물 동반 캠핑장에서 추억만들기</span>
          </div>
        </li>
        <li class="exhi_list" data-exhi="forest">
          <img src="./img/exhi_3.png" alt="숲속 캠핑" />
          <div class="exhi_text">
            <span class="exhi_title">서울근교 캠핑</span>
            <span class="exhi_sub">가까운 곳으로 부담 없이 다녀오세요!</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IndexExhibition;
