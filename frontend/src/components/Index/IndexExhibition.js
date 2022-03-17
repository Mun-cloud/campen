import { Link } from "react-router-dom";
import styled from "styled-components";

const Exhibition = styled.div`
  margin-top: 60px;

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

  .area_title {
    margin-bottom: 30px;
  }

  .exhi_list {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    img {
      width: 90px;
      height: 90px;
      border-radius: 10px;
      margin-right: 20px;
    }
  }

  .exhi_text {
    span {
      display: block;
      font-size: 13px;
    }

    .exhi_title {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;

const IndexExhibition = () => {
  return (
    <Exhibition>
      <Link className="area_title" to="/exhibition">
        <div className="area_title_left">캠핑 기획전</div>
        <div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </Link>
      <ul>
        <Link to={`/exhibition/1`} className="exhi_list" data-exhi="seoul">
          <img
            src={require("../../assets/img/exhi_1.png")}
            alt="서울근교 캠핑"
          />
          <div className="exhi_text">
            <span className="exhi_title">서울근교 캠핑</span>
            <span className="exhi_sub">
              가까운 곳으로 부담 없이 다녀오세요!
            </span>
          </div>
        </Link>
        <Link to={`/exhibition/2`} className="exhi_list" data-exhi="pet">
          <img
            src={require("../../assets/img/exhi_2.png")}
            alt="반려동물 캠핑"
          />
          <div className="exhi_text">
            <span className="exhi_title">우리집 댕댕이랑 캠핑가요</span>
            <span className="exhi_sub">
              반려동물 동반 캠핑장에서 추억만들기
            </span>
          </div>
        </Link>
        <Link to={`/exhibition/3`} className="exhi_list" data-exhi="forest">
          <img src={require("../../assets/img/exhi_3.png")} alt="숲속 캠핑" />
          <div className="exhi_text">
            <span className="exhi_title">서울근교 캠핑</span>
            <span className="exhi_sub">
              가까운 곳으로 부담 없이 다녀오세요!
            </span>
          </div>
        </Link>
      </ul>
    </Exhibition>
  );
};

export default IndexExhibition;
