const SearchHeader = () => {
  return (
    <div>
      <input type="text" placeholder="캠핑장명을 검색해 보세요" />
      <div>
        <input type="date" placeholder="날짜" />
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
    </div>
  );
};

export default SearchHeader;
