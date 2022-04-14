import { Link } from "react-router-dom";
import styled from "styled-components";
import CommuCntFooter from "./CommuCntFooter";

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

  .cnt-local {
    display: flex;
    padding-top: 10px;
    font-size: 9pt;
    color: #666;
    font-weight: 400;
    align-items: center;
  }
  .local-txt {
    margin-top: 2px;
    margin-left: 5px;
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

const Category0 = ({ data }) => {
  return (
    <>
      <CntBox key={data.id}>
        <Link to={`/board/${data.id}`}>
          {/* <!-- 컨텐츠:프로필,텍스트 --> */}
          <CntBoxText>
            <div className="cnt-category">캠핑한컷</div>
            <ul className="cnt-profile">
              <li className="cnt-user">
                <img
                  className="cnt-user-img"
                  src={require("../../assets/img/user-img.png")}
                  alt="인생캠핑"
                />
                <span className="cnt-user-name">{data.nickname}</span>
              </li>
              <li className="cnt-time">{data.edit_date}</li>
            </ul>

            <p className="cnt-desc">{data.content}</p>

            {/* <!-- 컨텐츠:위치정보 --> */}
            <div className="cnt-local">
              <i className="fas fa-map-marker-alt"></i>
              <span className="local-txt">{data.camp_id}</span>
            </div>
          </CntBoxText>

          {/* <!-- 컨텐츠:이미지 --> */}
          <CntImg>
            <div className="medium">
              <img
                src={require("../../assets/img/medium4.jpeg")}
                alt="커뮤니티"
              />
            </div>
            <div className="medium-half-container">
              <div className="medium-half">
                <img
                  src={require("../../assets/img/small4.jpeg")}
                  alt="커뮤니티"
                />
              </div>
              <div className="medium-half">
                <img
                  src={require("../../assets/img/small5.jpeg")}
                  alt="커뮤니티"
                />
              </div>
            </div>
          </CntImg>
        </Link>
      </CntBox>
      <CommuCntFooter />
    </>
  );
};

export default Category0;
