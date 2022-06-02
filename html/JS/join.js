/**
 * @ Filename : join.js
 * @ Author : 문태호
 * @ Description : 약관 동의 페이지 체크박스 컨트롤 JS
 */

let checker = {
  term1: false,
  term2: false,
  term3: false,
};

// 들어가야 할 기능
// checker 동의 여부 => 전체 동의
// 전체 동의 => ckecker 모두 true
// 체크 박스 클릭 => checker 연동
// checker 연동에 따른 필수항목 동의시 버튼 활성화

/* 전체 동의 체크 */
const checkAll = document.querySelector("#check_all");
const checkTerm = document.querySelectorAll(".check_term");
const footBtn = document.querySelector(".foot_btn");

// 전체동의 체크 이벤트
checkAll.addEventListener("change", () => {
  for (key in checker) {
    checker[key] = checkAll.checked;
  }
  checkSync();
  footBtnChange();
});

// 개별 항목 체크 이벤트
checkTerm.forEach((v) => {
  v.addEventListener("change", (e) => {
    const { id } = e.currentTarget.parentNode.parentNode;
    checker[id] = e.currentTarget.checked;
    checkSync();
    footBtnChange();
    checkAllHandle();
  });
});

// checker와 연동 기능
function checkSync() {
  for (key in checker) {
    document.querySelector("#" + key + " input").checked = checker[key];
  }
}

// 필수 항목 동의 시 버튼 변화
function footBtnChange() {
  const { term1, term2 } = checker;
  if (term1 && term2) {
    footBtn.classList = "foot_btn checked";
  } else {
    footBtn.classList = "foot_btn";
  }
}

// 모든 항목 체크 시 전체 동의 체크
function checkAllHandle() {
  const { term1, term2, term3 } = checker;

  if (term1 && term2 && term3) {
    checkAll.checked = true;
  } else {
    checkAll.checked = false;
  }
}

// 뒤로가기 버튼 클릭 이벤트
const backBtn = document.querySelector(".pop_chev");

backBtn.addEventListener("click", () => {
  location.href = "index.html";
});

// 버튼 클릭 이벤트
footBtn.addEventListener("click", () => {
  if (footBtn.classList != "foot_btn checked") {
    alert("필수동의 항목을 체크해주세요");
  } else {
    location.href = "sign-up.html";
  }
});

/* 가입약관 페이지 이동 */
const checkList = document.querySelectorAll(".check_list i");
checkList.forEach((v) => {
  v.addEventListener("click", (e) => {
    location.href = e.currentTarget.parentNode.id + ".html";
  });
});
