import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CntBox = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;

  .cnt-box {
    margin-bottom: 8px;
    background: rgb(255, 255, 255);
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const CntBoxText = styled.div`
  padding: 13px;
  line-height: 24px;

  .cnt-category {
    display: inline-block;
    margin-top: 8px;
    padding: 0px 5px;
    margin-bottom: 15px;
    background: rgb(234, 238, 236);
    border-radius: 3px;
    color: #555;
    font-weight: 500;
    font-size: 9pt;
  }

  .cnt-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cnt-user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cnt-user-img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid rgb(201, 207, 204);
    object-fit: cover;
  }

  .cnt-user-name {
    display: flex;
    font-size: 11pt;
    font-weight: 500;
    color: #333;
  }

  .cnt-time {
    color: #999;
    font-weight: 400;
    font-size: 9pt;
  }

  .cnt-Q::before {
    margin-right: 2px;
    content: "Q.";
    color: rgb(67, 192, 131);
    font-size: 14pt;
    font-weight: 500;
  }

  .cnt-desc,
  .cnt-Q {
    padding-top: 10px;
    overflow: hidden;
    white-space: normal;
    text-align: left;
    font-size: 10pt;
    color: #333;
  }
`;

const CntImg = styled.div`
  width: 100%;

  .default {
    position: relative;
    width: 100%;
    height: 500px;
    margin-bottom: 5px;
  }

  .medium {
    position: relative;
    width: 100%;
    height: 250px;
    margin-bottom: 3px;
  }
  .medium-half-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    margin-bottom: 3px;
    overflow: hidden;
  }
  .medium-half {
    width: 49.7%;
    height: 150px;
  }

  .small-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    margin-bottom: 3px;
    overflow: hidden;
  }
  .small {
    width: 33%;
    height: 150px;
  }

  .default img,
  .medium img,
  .medium-half img,
  .small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .small-container div:nth-child(3) {
    position: relative;
  }
  .small span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 15pt;
    letter-spacing: 3pt;
  }
`;

const CommuCnt = () => {
  return (
    <>
      {/* <!-- 컨텐츠:프로필,텍스트 --> */}
      <CntBox>
        <NavLink to="../components/Commu/CommuDetail">
          <CntBoxText>
            <div className="cnt-category">캠핑한컷</div>
            <ul className="cnt-profile">
              <li className="cnt-user">
                <img
                  className="cnt-user-img"
                  src={require("../../assets/img/user-img.png")}
                  alt="캠퍼1103"
                />
                <span className="cnt-user-name">캠퍼1103</span>
              </li>
              <li className="cnt-time">6시간 전</li>
            </ul>
            <p className="cnt-desc">
              근래 캠핑에서 가장 기억에 남았던것 중 하나, 아주 쏟아질듯한
              별들이였어요! 날씨가 추워서 불멍은 못했지만 별멍은 엄청때리고
              왔습니다ㅎㅎ 다들 구경하고 가세요!!
            </p>
          </CntBoxText>

          {/* <!-- 컨텐츠:이미지 --> */}
          <CntImg>
            <div className="medium">
              <img src="./img/medium.jpeg" alt="커뮤니티" />
            </div>
            <div className="medium">
              <img src="./img/medium1.jpeg" alt="커뮤니티" />
            </div>
          </CntImg>
        </NavLink>
      </CntBox>
    </>
  );
};

export default CommuCnt;
