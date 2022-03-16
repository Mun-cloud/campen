const CampIntro = () => {
  return (
    <section className="camp_container" id="camp_intro">
      <div className="box_title">캠핑장 소개</div>
      <p id="camp_intro_article" className="close">
        경기도 최고의 키즈캠핑장 구봉산 나인힐스! 365일 사계절 온수풀 /
        실내키즈카페 / 바이킹 / 방탈출카페 / 타미야레이싱카 / 각종 이벤트
        아이들이 쉴틈없이 놀다가는 캠핑장입니다. 서울에서 1시간 이내 도착이
        가능한 서울근교의 공기좋은 캠핑장!!
      </p>
      <div className="intro_tag_box hidden">
        <div className="intro_tag">#서울인근캠핑장</div>
        <div className="intro_tag">#경기도캠핑장</div>
        <div className="intro_tag">#키즈캠핑장</div>
        <div className="intro_tag">#용인캠핑장</div>
        <div className="intro_tag">#애견동반캠핑장</div>
        <div className="intro_tag">#온수수영장</div>
        <div className="intro_tag">#바이킹캠핑장</div>
        <div className="intro_tag">#그늘막캠핑장</div>
        <div className="intro_tag">#시설좋은캠핑장</div>
      </div>
      <button className="camp_btn" id="intro_toggle">
        캠핑장 소개 더보기
      </button>
    </section>
  );
};

export default CampIntro;
