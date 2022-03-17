import style from "styled-components";

const ReportCnt = () => {
  return (
    <>
      {/* <!-- 컨텐츠 --> */}
      <div class="report-container">
        <div class="report-box">지나친 광고</div>
        <div class="report-box">도배 및 중복</div>
        <div class="report-box">저작권 침해</div>
        <div class="report-box">욕설 및 비방</div>
        <div class="report-box">외설적인 게시글</div>
        <div class="report-box">개인정보 노출</div>
        <div class="report-box">기타</div>
        <div class="report-text">
          <textarea
            placeholder="신고 내용을 입력해주세요.(최대 300자)"
            height="100%"
            name="report"
            maxlength="300"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default ReportCnt;
