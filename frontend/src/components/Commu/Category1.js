import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CntBox = styled.div`
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

const CntFooter = styled.div`
  display: flex;
  padding: 14px 15px;
  font-size: 10pt;
  color: #666;
  font-weight: 400;

  .cnt-like {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Category1 = ({ data }) => {
  const [reg, setReg] = useState();
  useEffect(() => {
    let dateObj = new Date(data.reg_date);
    setReg(dateObj.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
  }, [data]);

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <CntBox key={data.id}>
          {/* <!-- 컨텐츠:프로필,텍스트 --> */}
          <Link to={`/log/${data.id}`}>
            <CntBoxText>
              <div className="cnt-category">캠핑후기</div>
              <ul className="cnt-profile">
                <a href="../profile1-2.html">
                  <li className="cnt-user">
                    <img
                      className="cnt-user-img"
                      src={require("../../assets/img/user-img.png")}
                      alt="캠퍼1103"
                    />
                    <span className="cnt-user-name">{data.id}</span>
                  </li>
                </a>
                <li className="cnt-time">{reg}</li>
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
        {/* <!-- 컨텐츠:좋아요,댓글 --> */}
        <CntFooter>
          <div className="cnt-like" href="#">
            <a href="#">
              <i className="far fa-heart"></i>
              좋아요
            </a>
          </div>
        </CntFooter>
      </div>
    </>
  );
};

export default Category1;
