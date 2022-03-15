import styled from "styled-components";

import SearchHeader from "../components/Search/SearchHeader";
import SearchResultBox from "../components/Search/SearchResultBox";
import SearchTagBox from "../components/Search/SearchTagBox";

const ResultCountCount = styled.div``;

const Search = () => {
  return (
    <div>
      <SearchHeader />
      <ResultCountCount>
        <h2>
          캠핏 검색결과 <span id="search_result_count">49개</span>
        </h2>
      </ResultCountCount>
      <SearchResultBox />
      <SearchTagBox />
    </div>
  );
};

export default Search;
