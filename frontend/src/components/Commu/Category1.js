import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeBtn from "../LikeBtn";
import CntBoxText from "./CntBoxText";
import CntImg from "./CntImg";
import CommuCntFooter from "./CommuCntFooter";

const CntBox = styled.div`
  margin-bottom: 8px;
  background: rgb(255, 255, 255);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const CntFooter = styled.div`
  display: flex;
  padding: 14px 15px;
  font-size: 10pt;
  color: #666;
  font-weight: 400;
`;

const Category1 = ({ data }) => {
  return (
    <CntBox key={data.id}>
      {/* <!-- 컨텐츠:프로필,텍스트 --> */}
      <Link to={`/log/${data.id}`}>
        <CntBoxText data={data} location={true} />

        {/* <!-- 컨텐츠:이미지 --> */}
        {!data.src ? null : <CntImg src={data.src} />}
      </Link>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CommuCntFooter data={data} />
      {/* <CntFooter>
        <LikeBtn content={data} />
      </CntFooter> */}
    </CntBox>
  );
};

export default Category1;
