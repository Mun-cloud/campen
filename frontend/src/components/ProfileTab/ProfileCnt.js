import { useEffect } from "react";
import styled from "styled-components";

import ProfileCntFooter from "./ProfileCntFooter";

const CntContainer = styled.div`
  display: block;
  margin-bottom: 1px;
  padding: 25px 20px 20px;
  background: rgb(255, 255, 255);
`;
const CntBox = styled.div`
  padding-bottom: 10px;
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

const ProfileCnt = ({ content }) => {
  return !content ? null : (
    <CntContainer>
      {content.contents.map((v) => (
        <>
          <CntBox>
            {/*  <!-- 날짜 --> */}
            <div className="cnt-date">{v.reg_date}</div>

            {/*  <!-- 컨텐츠 내용 --> */}
            <div className="cnt-body">
              {/* <!-- 제목,본문 --> */}
              <div className="cnt">
                <h3 className="cnt-title">{v.tab}</h3>
                <div className="cnt-content">{v.content}</div>
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
          <ProfileCntFooter />
        </>
      ))}
    </CntContainer>
  );
};

export default ProfileCnt;
