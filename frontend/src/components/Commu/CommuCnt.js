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
  return (
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
    </CntBox>
  );
};

export default CommuCnt;
