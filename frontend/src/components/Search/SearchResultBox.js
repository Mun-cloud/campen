import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchSwiper from "./SearchSwiper";
import SearchTagBox from "./SearchTagBox";

const ResultInfo = styled.div`
  width: 100%;
  height: 85px;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #050606;
  cursor: pointer;

  #camp_class {
    opacity: 0.5;
  }

  #camp_name {
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0;
  }

  #camp_log_box {
    color: rgb(67, 192, 131);
  }

  .result_charge {
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  #charge {
    font-size: 20px;
  }
`;

const SearchResultBox = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SearchSwiper />
      <ResultInfo
        onClick={() => {
          navigate("/camp/1");
        }}
      >
        <div className="result_text">
          <div className="rusult_info">
            <div id="camp_class">오토캠핑 글램핑 펜션</div>
            <div id="camp_name">구봉산오토캠핑장 나인힐스</div>
          </div>
          <div id="camp_log_box">
            캠핑로그 <span id="camp_log_count">184</span>개
          </div>
        </div>
        <div className="result_charge">
          <span id="charge">40,000</span>원 부터
        </div>
      </ResultInfo>
      <SearchTagBox />
    </div>
  );
};

export default SearchResultBox;
