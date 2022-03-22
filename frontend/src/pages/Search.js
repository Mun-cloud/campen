import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import SearchHeader from "../components/Search/SearchHeader";
import SearchResultBox from "../components/Search/SearchResultBox";

const ResultCountCount = styled.div`
  padding: 24px 0 10px 14px;
  background-color: white;
  h2 {
    font-size: 17px;
    font-weight: bold;
  }
`;

const Search = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/campdata");

        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div>
      <SearchHeader />
      <ResultCountCount>
        <h2>
          캠핏 검색결과 <span id="search_result_count">49개</span>
        </h2>
      </ResultCountCount>
      <SearchResultBox />
    </div>
  );
};

export default Search;
