import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  min-height: 150px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;

const SearchHeader = () => {
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
        <select>
          <option value="0">지역</option>
          <option value="1">서울</option>
          <option value="2">경기</option>
          <option value="3">인천</option>
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
