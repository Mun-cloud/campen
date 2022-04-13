import { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

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

const CommuCnt = ({ data }) => {
  console.log(data);

  useEffect(() => {}, [data]);

  let date = data && data.map((v) => v.edit_date);

  // const localDate = dayjs.utc(date).local().format("MM/DD/YY h:mm A");

  // console.log(localDate);

  // const curr = new Date();
  // console.log(curr);

  // function displayedAt(curruntDate) {
  //   const milliSeconds = new Date() - curruntDate;
  //   const seconds = milliSeconds / 1000;
  //   if (seconds < 60) return `방금 전`;
  //   console.log(seconds);
  //   const minutes = seconds / 60;
  //   if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  //   const hours = minutes / 60;
  //   if (hours < 24) return `${Math.floor(hours)}시간 전`;
  //   const days = hours / 24;
  //   if (days < 7) return `${Math.floor(days)}일 전`;
  //   const weeks = days / 7;
  //   if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  //   const months = days / 30;
  //   if (months < 12) return `${Math.floor(months)}개월 전`;
  //   const years = days / 365;
  //   return `${Math.floor(years)}년 전`;
  // }

  const categoryFn = (id) => {
    let result = "";
    if (id === 0) {
      result = "캠핑한컷";
    } else if (id === 1) {
      result = "캠핑후기";
    } else if (id === 2) {
      result = "궁금해요";
    }
    return result;
  };

  return (
    <>
      {/* <!-- 컨텐츠:프로필,텍스트 --> */}

      <CntBox>
        {data &&
          data.map((i) => {
            return (
              <NavLink to="../components/Commu/CommuDetail" key={i.id}>
                <CntBoxText>
                  <div className="cnt-category">{categoryFn(i.id)}</div>
                  <ul className="cnt-profile">
                    <li className="cnt-user">
                      <img
                        className="cnt-user-img"
                        src={require("../../assets/img/user-img.png")}
                        alt="캠퍼1103"
                      />
                      <span className="cnt-user-name">{i.camp_id}</span>
                    </li>
                    <li className="cnt-time">
                      {dayjs(data.edit_date).format("YY/MM/DD hh:mm")}
                    </li>
                  </ul>
                  <p className="cnt-desc"></p>
                </CntBoxText>

                {/* <!-- 컨텐츠:이미지 --> */}
                <CntImg>
                  <div className="medium">
                    <img
                      src={require("../../assets/img/medium.jpeg")}
                      alt="커뮤니티"
                    />
                  </div>
                  <div className="medium">
                    <img
                      src={require("../../assets/img/medium1.jpeg")}
                      alt="커뮤니티"
                    />
                  </div>
                </CntImg>
              </NavLink>
            );
          })}
      </CntBox>
    </>
  );
};

export default CommuCnt;
