import style from "styled-components";

const ProfileCnt = () => {
  return (
    <>
      <div class="cnt-box">
        {/*  <!-- 날짜 --> */}
        <div class="cnt-date">22.02.06</div>

        {/*  <!-- 컨텐츠 내용 --> */}
        <div class="cnt-body">
          {/* <!-- 제목,본문 --> */}
          <div class="cnt">
            <h3 class="cnt-title">캠핑한컷</h3>
            <div class="cnt-content">
              근래 캠핑에서 가장 기억에 남았던것 중 하나, 아주 쏟아질듯한
              별들이였어요! 날씨가 추워서 불멍은 못했지만 별멍은 엄청때리고
              왔습니다ㅎㅎ 다들 구경하고 가세요!!
            </div>
          </div>
          {/*  <!-- 이미지 --> */}
          <div class="cnt-img">
            <img src="./img/medium.jpeg" alt="컨텐츠 이미지" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCnt;
