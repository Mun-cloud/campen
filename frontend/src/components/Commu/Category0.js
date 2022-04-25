import { Link } from "react-router-dom";
import styled from "styled-components";
import CommuCntFooter from "./CommuCntFooter";
import CntImg from "./CntImg";
import CntBoxText from "./CntBoxText";

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

const Category0 = ({ data }) => {
  return (
    <>
      <CntBox key={data.id}>
        <Link to={`/board/${data.id}`}>
          {/* <!-- 컨텐츠:프로필,텍스트 --> */}
          <CntBoxText data={data} location={true} />

          {/* <!-- 컨텐츠:이미지 --> */}
          <CntImg src={data.src} />
        </Link>
      </CntBox>
      <CommuCntFooter data={data} />
    </>
  );
};

export default Category0;
