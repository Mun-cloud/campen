import { Link } from "react-router-dom";
import styled from "styled-components";

const SectionTitle = styled.div`
  .area_title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .area_title_left {
    font-size: 18px;
    font-weight: bold;
  }

  .area_title_btn {
    display: block;
    color: rgb(67, 192, 131);
    border: 1.5px solid rgb(67, 192, 131);
    padding: 4px 6px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: bold;
    font-weight: 400;
  }

  .commu_link {
    display: block;
    font-size: 13px;
    color: rgb(90, 94, 91);
    font-weight: bold;
    margin-top: 7px;
    margin-bottom: 23px;
    font-weight: 400;

    span {
      display: block;
      margin-bottom: 4px;
    }
  }
`;

const IndexSectionTitle = ({ title, btn, sub1, sub2, mt, url }) => {
  return (
    <SectionTitle style={{ marginTop: mt }}>
      <div className="area_title">
        <div className="area_title_left">{title}</div>
        <Link to="/write" className="area_title_btn">
          {btn === "업로드" ? (
            <i className="fas fa-camera"></i>
          ) : btn === "글쓰기" ? (
            <i className="fas fa-pen"></i>
          ) : null}{" "}
          {btn}
        </Link>
      </div>
      <Link to={url} className="commu_link">
        <span>{sub1}</span>
        <span>
          {sub2}
          <i className="fas fa-chevron-right"></i>
        </span>
      </Link>
    </SectionTitle>
  );
};

export default IndexSectionTitle;
