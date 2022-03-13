import styled from "styled-components";

const SubDetailCnt = () => {
  return (
    <div>
      {/* <!-- header: 상세 상단 --> */}
      <p class="cnt-desc">
        너무너무 잘 쉬다 왔어요~ 일요일에 가니 사람도 없고 완전 전세캠했습니다
        ㅎㅎ 캠지기님도 넘 친절하고 뷰도 가리는거 없이 좋았네요 사람이
        없기도했지만 한눈에봐도 사이트 간격이 넓은편입니다 또 놀러갈 예정이에요
        ㅎㅎㅎ
      </p>

      {/*  <!-- 컨텐츠:위치정보 --> */}
      <div class="cnt-local">
        <i class="fas fa-map-marker-alt"></i>
        <span class="local-txt">강화도산들애캠핑수영장 대형11번~27번 27번</span>
      </div>

      {/* 컨텐츠:이미지 */}
      <div class="cnt-img">
        <div class="medium">
          <img src="../img/medium4.jpeg" alt="커뮤니티" />
        </div>
        <div class="medium-half-container">
          <div class="medium-half">
            <img src="../img/small4.jpeg" alt="커뮤니티" />
          </div>
          <div class="medium-half">
            <img src="../img/small5.jpeg" alt="커뮤니티" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDetailCnt;
