import styled from "styled-components";
import { Link } from "react-router-dom";

const CampFilter = styled.ul`
  display: flex;
  margin-bottom: 20px;

  li {
    width: 25%;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 80%;
    }

    span {
      margin-top: 10px;
      font-size: 12px;
    }
  }
`;

const IndexCampFilter = () => {
  return (
    // <!-- 캠핑장 필터 연결 -->
    <CampFilter>
      <li id="experience">
        <Link to="./search">
          <img src={require("../../assets/img/캠핀03.png")} alt="체험캠핑" />
          <span>체험캠핑</span>
        </Link>
      </li>
      <li id="kids">
        <Link to="./search">
          <img src={require("../../assets/img/캠핀04.png")} alt="키즈캠핑" />
          <span>키즈캠핑</span>
        </Link>
      </li>
      <li id="campnic">
        <Link to="./search">
          <img src={require("../../assets/img/캠핀05.png")} alt="캠프닉" />
          <span>캠프닉</span>
        </Link>
      </li>
      <li id="glamping">
        <Link to="./search">
          <img src={require("../../assets/img/캠핀06.png")} alt="글램핑" />
          <span>글램핑</span>
        </Link>
      </li>
      <li id="pet">
        <Link to="./search">
          <img src={require("../../assets/img/캠핀07.png")} alt="반려동물" />
          <span>반려동물</span>
        </Link>
      </li>
    </CampFilter>
  );
};

export default IndexCampFilter;
