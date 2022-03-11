import styled from "styled-components";

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
        <a href="./search.html">
          <img src={"../../assets/img/캠핀03.png"} alt="체험캠핑" />
          <span>체험캠핑</span>
        </a>
      </li>
      <li id="kids">
        <a href="./search.html">
          <img src={"../../assets/img/캠핀04.png"} alt="키즈캠핑" />
          <span>키즈캠핑</span>
        </a>
      </li>
      <li id="campnic">
        <a href="./search.html">
          <img src={"../../assets/img/캠핀05.png"} alt="캠프닉" />
          <span>캠프닉</span>
        </a>
      </li>
      <li id="glamping">
        <a href="./search.html">
          <img src={"../../assets/img/캠핀06.png"} alt="글램핑" />
          <span>글램핑</span>
        </a>
      </li>
      <li id="pet">
        <a href="./search.html">
          <img src={"../../assets/img/캠핀07.png"} alt="반려동물" />
          <span>반려동물</span>
        </a>
      </li>
    </CampFilter>
  );
};

export default IndexCampFilter;
