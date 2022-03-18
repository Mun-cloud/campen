import { useNavigate } from "react-router-dom";
import SearchSwiper from "./SearchSwiper";

const SearchResultBox = () => {
  const navigation = useNavigate();
  return (
    <div to="/camp/1">
      <SearchSwiper />
      <div className="result_info">
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
      </div>
    </div>
  );
};

export default SearchResultBox;
