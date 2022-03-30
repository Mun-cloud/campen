import styled from "styled-components";

const CntBox = styled.div`
  display: block;
  margin-bottom: 1px;
  padding: 25px 20px 20px;
  background: rgb(255, 255, 255);

  .cnt-date {
    color: rgb(159, 165, 162);
    font-size: 9pt;
    font-weight: 500;
    line-height: 100%;
  }

  .cnt-body {
    margin: 10px 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cnt {
    align-self: flex-start;
    width: 73%;
  }

  .cnt-title {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 13pt;
    line-height: 100%;
  }

  .cnt-content {
    font-size: 10pt;
    color: rgb(159, 165, 162);
    line-height: 150%;
    font-weight: 400;
    overflow: hidden;
    /* 말줄임표시 */
    text-overflow: ellipsis;
    /* 두줄 제한 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cnt-img img {
    margin: 4px 0px;
    border-radius: 8px;
    display: block;
    width: 55px;
    height: 55px;
    object-fit: cover;
  }
`;

const ProfileCnt = () => {
  return (
    <>
      <CntBox>
        {/*  <!-- 날짜 --> */}
        <div className="cnt-date">22.02.06</div>

        {/*  <!-- 컨텐츠 내용 --> */}
        <div className="cnt-body">
          {/* <!-- 제목,본문 --> */}
          <div className="cnt">
            <h3 className="cnt-title">캠핑한컷</h3>
            <div className="cnt-content">
              근래 캠핑에서 가장 기억에 남았던것 중 하나, 아주 쏟아질듯한
              별들이였어요! 날씨가 추워서 불멍은 못했지만 별멍은 엄청때리고
              왔습니다ㅎㅎ 다들 구경하고 가세요!!
            </div>
          </div>
          {/*  <!-- 이미지 --> */}
          <div className="cnt-img">
            <img
              src={require("../../assets/img/medium.jpeg")}
              alt="컨텐츠 이미지"
            />
          </div>
        </div>
      </CntBox>
    </>
  );
};

export default ProfileCnt;
