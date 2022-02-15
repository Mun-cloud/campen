/**
 * @ Filename : component.js
 * @ Author : 문태호
 * @ Description : footer 작동기능 JS
 */

/** footer 사업자 정보 스크립트 */
const businessInfo = document.querySelector(".business_info");
const businessInfoIcon = document.querySelector(".business_info i");

businessInfoIcon.addEventListener("click", () => {
  if (businessInfo.style.height == "134px") {
    businessInfoIcon.classList = "fas fa-chevron-down";
    businessInfo.style.height = "30px";
  } else {
    businessInfoIcon.classList = "fas fa-chevron-up";
    businessInfo.style.height = "134px";
  }
});
