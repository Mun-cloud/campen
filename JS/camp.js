const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  freeMode: true,
});

/** 글라이드 설정 */
const config = {
  type: "carousel",
};

new Glide(".glide", config).mount();

/****** 페이지 자바스크립트 ******/
// 캠핑장 소개 더보기
const introToggle = document.getElementById("intro_toggle");
const campIntroArticle = document.getElementById("camp_intro_article");
const intro = document.querySelector(".intro_tag_box");

introToggle.addEventListener("click", () => {
  campIntroArticle.classList.toggle("close");
  // introTag.forEach(v => { v.hidden = true; })
  intro.classList.toggle("hidden");
  if (introToggle.textContent != "접기") {
    introToggle.textContent = "접기";
  } else {
    introToggle.textContent = "캠핑장 소개 더보기";
  }
});

// 캠핑장 팝업창 기능
const policyBtn = document.getElementById("policy_btn");
const refundBtn = document.getElementById("refund_btn");
const businessBtn = document.getElementById("business_btn");
const pop = document.querySelectorAll(".pop");
const popChev = document.querySelectorAll(".pop_chev");

// 모든 팝업창 숨김
pop.forEach((v) => {
  v.hidden = true;
});

// 운영정책 버튼 이벤트
policyBtn.addEventListener("click", () => {
  popControl(".policy_pop");
});

// 환불규정 클릭 이벤트
refundBtn.addEventListener("click", () => {
  popControl(".refund_pop");
});

// 사업자 정보 클릭 이벤트
businessBtn.addEventListener("click", () => {
  popControl(".business_pop");
});

// 팝업창 뒤로가기 버튼 클릭 이벤트
popChev.forEach((v) => {
  v.addEventListener("click", (e) => {
    e.currentTarget.closest(".pop").hidden = true;
  });
});

// 버튼 클릭 -> 연관된 팝업 띄우기 -> chev클릭 -> 팝업 창 히든
// 모든 버튼에 클릭 이벤트를 주고 -> 연관된 팝업창을 실행시키는 function 설정
// 연관된 팝업창 설정 (id+pop)
function popControl(selector) {
  const popup = document.querySelector(selector);
  popup.hidden ? (popup.hidden = false) : (popup.hidden = true);
}

/* 캠핑로그 더보기 링크 */
const logBtn = document.getElementById("log_btn");
logBtn.addEventListener("click", () => {
  location.href = "#";
});

/** 뒤로가기 버튼 클릭 */
const mainChev = document.querySelector(".camp_main .pop_chev");
mainChev.addEventListener("click", () => {
  location.href = "search.html";
});
