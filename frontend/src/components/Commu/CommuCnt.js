import styled from "styled-components";

import Category1 from "./Category1";
import Category0 from "./Category0";

const CntBox = styled.div`
  margin-top: 50px;
  padding-bottom: 60px;
  background-color: rgb(231, 240, 234);

  .cnt-box {
    margin-bottom: 8px;
    background: ${(props) => props.theme.white};
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
          // tab값에 따라 출력 형식 변경
          if (v.tab === 0 || v.tab === 2) {
            return <Category0 data={v} key={v.id} />;
          } else if (v.tab === 1) {
            return <Category1 data={v} key={v.id} />;
          } else return null;
        })}
    </CntBox>
  );
};

export default CommuCnt;
