import styled from "styled-components";

const Box = styled.div`
  display: block;
  font-size: 11pt;
  color: rgb(37, 40, 38);
  cursor: pointer;

  .my-div {
    width: 100%;
    min-height: 40px;
    line-height: 40px;
    margin-top: 8px;
    padding: 20px 20px;
    background: rgb(255, 255, 255);
    cursor: pointer;
    border-top: none;
  }
`;

const MyLoginCnt = () => {
  return (
    <>
      {/* <!-- 공지사항,설정,고객센터 박스  --> */}
      <Box>
        <a class="my-content" href="#">
          <div class="my-div">내가 작성한글</div>
        </a>
      </Box>

      <Box>
        <a class="my-notice" href="#">
          <div class="my-div">공지사항</div>
        </a>
      </Box>

      <Box>
        <a class="my-set" href="#">
          <div class="my-div">설정</div>
        </a>
      </Box>
    </>
  );
};

export default MyLoginCnt;
