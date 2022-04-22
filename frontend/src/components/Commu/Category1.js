import { Link } from "react-router-dom";
import styled from "styled-components";
import CntBoxText from "./CntBoxText";
import CntImg from "./CntImg";

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
  return (
    <div style={{ marginBottom: "8px" }}>
      <CntBox key={data.id}>
        {/* <!-- 컨텐츠:프로필,텍스트 --> */}
        <Link to={`/log/${data.id}`}>
          <CntBoxText data={data} location={true} />

          {/* <!-- 컨텐츠:이미지 --> */}
          <CntImg src={data.src} />
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
  );
};

export default Category1;
