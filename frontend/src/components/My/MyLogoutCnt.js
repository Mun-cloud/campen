import style from "styled-components";

const MyLogotCnt = () => {
  return (
    <>
      {/* <!-- 공지사항,설정,고객센터 박스  --> */}

      <a class="my-notice" href="#">
        <div class="my-div">공지사항</div>
      </a>
      <a class="my-set" href="#">
        <div class="my-div">설정</div>
      </a>
      <a class="my-center" href="#">
        <div class="my-div">고객센터</div>
      </a>
    </>
  );
};

export default MyLogotCnt;
