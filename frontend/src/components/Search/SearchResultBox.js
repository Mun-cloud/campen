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
    color: ${(props) => props.theme.mainColor};
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

const SearchResultBox = ({ item }) => {
  const navigate = useNavigate();
  return !item ? null : (
    <div style={{ "border-top": "1px solid rgba(0, 0, 0, 0.2)" }}>
      {/* 이미지리스트 슬라이드 */}
      <SearchSwiper item={item} />
      {/* 검색결과 정보 출력 */}
      <ResultInfo
        onClick={() => {
          navigate(`/camp/${item.id}`);
        }}
      >
        <div className="result_text">
          <div className="rusult_info">
            <div id="camp_class">{item.addr1}</div>
            <div id="camp_name">{item.name}</div>
          </div>
        </div>
        <div className="result_charge">
          {!item.price ? (
            "가격정보없음"
          ) : (
            <>
              <span id="charge">{item.price}</span>원 부터
            </>
          )}
        </div>
      </ResultInfo>
      {/* 태그 박스 */}
      <SearchTagBox item={item} />
    </div>
  );
};

export default SearchResultBox;
