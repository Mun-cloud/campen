import styled from "styled-components";
import CommuDetail from "../components/Commu/CommuDetail";

const CntContainer = styled.

const CommuCnt = () => {
  return (
    <div>
      <CommuDetail />
      {/* <!-- 컨텐츠:프로필,텍스트 --> */}
      <div class="cnt-box-txt">
        <div class="cnt-category">캠핑한컷</div>
        <ul class="cnt-profile">
          <li class="cnt-user">
            <img class="cnt-user-img" src="./img/user-img.png" alt="캠퍼1103" />
            <span class="cnt-user-name">캠퍼1103</span>
          </li>
          <li class="cnt-time">6시간 전</li>
        </ul>
        <p class="cnt-desc">
          근래 캠핑에서 가장 기억에 남았던것 중 하나, 아주 쏟아질듯한
          별들이였어요! 날씨가 추워서 불멍은 못했지만 별멍은 엄청때리고
          왔습니다ㅎㅎ 다들 구경하고 가세요!!
        </p>
      </div>

      {/* <!-- 컨텐츠:이미지 --> */}
      <div class="cnt-img">
        <div class="medium">
          <img src="./img/medium.jpeg" alt="커뮤니티" />
        </div>
        <div class="medium">
          <img src="./img/medium1.jpeg" alt="커뮤니티" />
        </div>
      </div>
    </div>
  );
};

export default CommuCnt;
