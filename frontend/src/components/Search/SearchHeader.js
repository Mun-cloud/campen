import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  min-height: 150px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;

const SearchHeader = ({ getLocation, getSearchKey }) => {
  const go = useNavigate();
  return (
    <Header>
      <i
        onClick={() => go(-1)}
        className="fas fa-chevron-left"
        style={{ cursor: "pointer" }}
      ></i>
      <input type="text" placeholder="캠핑장명을 검색해 보세요" />
      <div>
        <select onChange={(e) => getLocation(e.currentTarget.value)}>
          <option value="전체">지역</option>
          <option value="경기">경기</option>
          <option value="인천">인천</option>
          <option value="강원">강원</option>
          <option value="충북">충북</option>
          <option value="충남">충남</option>
          <option value="경북">경북</option>
          <option value="경남">경남</option>
          <option value="전북">전북</option>
          <option value="전남">전남</option>
        </select>
      </div>
      <div>
        <div>입지형태</div>
        <div>기본시설</div>
      </div>
    </Header>
  );
};

export default SearchHeader;
