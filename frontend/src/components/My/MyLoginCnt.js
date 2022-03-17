import style from "styled-components";

const MyLoginCnt = () => {
  return (
    <>
      {/* <!-- 공지사항,설정,고객센터 박스  --> */}
      <a class="my-content" href="#">
        <div class="my-div">내가 작성한글</div>
      </a>
      <a class="my-notice" href="#">
        <div class="my-div">공지사항</div>
      </a>
      <a class="my-set" href="#">
        <div class="my-div">설정</div>
      </a>
    </>
  );
};

export default MyLoginCnt;
