import { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

import Category1 from "./Category1";
import Category2 from "./Category2";
import Category0 from "./Category0";

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

const CommuCnt = ({ data }) => {
  console.log(data);

  useEffect(() => {}, [data]);

  // let date = data && data.map((v) => v.edit_date);

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

  return (
    <>
      {/* <!-- 컨텐츠:프로필,텍스트 --> */}
      <CntBox>
        {data &&
          data.map((v) => {
            if (v.tab === 0) {
              return <Category0 data={v} />;
            } else if (v.tab === 1) {
              return <Category1 data={v} />;
            } else if (v.tab === 2) {
              return <Category2 data={v} />;
            }
          })}
        ;
      </CntBox>
    </>
  );
};

export default CommuCnt;
