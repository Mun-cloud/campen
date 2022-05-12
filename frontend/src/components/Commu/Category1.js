import { Link } from "react-router-dom";
import styled from "styled-components";
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

const Category1 = ({ data }) => {
  return (
    <CntBox key={data.id}>
      {/* <!-- 컨텐츠:프로필,텍스트 --> */}
      <Link to={`/log/${data.id}`}>
        <CntBoxText data={data} locationMark={false} />

        {/* <!-- 컨텐츠:이미지 --> */}
        {!data.src ? null : (
          <CntImg src={process.env.REACT_APP_BACK + data.src} />
        )}
      </Link>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CommuCntFooter data={data} comment={false} />
    </CntBox>
  );
};

export default Category1;
