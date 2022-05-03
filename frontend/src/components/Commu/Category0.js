import { Link } from "react-router-dom";
import styled from "styled-components";
import CommuCntFooter from "./CommuCntFooter";
import CntImg from "./CntImg";
import CntBoxText from "./CntBoxText";

const CntBox = styled.div`
  background: rgb(255, 255, 255);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const Category0 = ({ data }) => {
  return (
    <CntBox key={data.id}>
      <Link to={`/board/${data.id}`}>
        {/* <!-- 컨텐츠:프로필,텍스트 --> */}
        <CntBoxText data={data} locationMark={false} />

        {/* <!-- 컨텐츠:이미지 --> */}
        {!data.src ? null : <CntImg src={data.src} />}
      </Link>
      <CommuCntFooter data={data} />
    </CntBox>
  );
};

export default Category0;
