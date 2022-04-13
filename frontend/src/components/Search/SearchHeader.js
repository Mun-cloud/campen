import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;

  div:first-child {
    display: flex;
    width: 100%;

    i {
      margin-right: 15px;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
    }

    form {
      width: 90%;
      input {
        width: 100%;
        border: none;
        font-size: 16px;
      }
    }
  }

  select {
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const SearchHeader = ({ getLocation }) => {
  const go = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    go(`/search?query=${encodeURIComponent(keyword)}`);
  };

  return (
    <Header>
      <div>
        <i
          onClick={() => go(-1)}
          className="fas fa-chevron-left"
          style={{ cursor: "pointer" }}
        ></i>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="캠핑장명을 검색해 보세요"
            value={keyword}
            onChange={(e) => setKeyword(e.currentTarget.value)}
          />
        </form>
      </div>
      <div>
        <select onChange={(e) => getLocation(e.currentTarget.value)}>
          <option value="">지역</option>
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
    </Header>
  );
};

export default SearchHeader;
