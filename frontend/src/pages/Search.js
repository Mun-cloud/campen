import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import qs from "qs";

import SearchHeader from "../components/Search/SearchHeader";
import SearchResultBox from "../components/Search/SearchResultBox";
import { getCampList } from "../slices/CampSlice";

const ResultCountCount = styled.div`
  padding: 24px 0 10px 14px;
  background-color: white;
  h2 {
    font-size: 17px;
    font-weight: bold;
  }
`;

const Search = () => {
  // query값 수신
  const { search } = useLocation();
  const { query } = qs.parse(search, { ignoreQueryPrefix: true });

  // 페이지 번호 상태값
  const [page, setPage] = useState(1);
  // 무한 스크롤 관련
  const [ref, inView] = useInView();

  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.camp);
  // 액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  // // 검색결과 목록 출력 State
  const [allCamp, setAllCamp] = useState(0);
  // const [campList, setCampList] = useState([]);

  // 검색이 실행되면 페이지 번호 초기화
  useEffect(() => {
    setPage(1);
  }, [query]);

  // query값이 변경될 때만 실행되는 hook을 통해 액션함수 디스패치
  useEffect(() => {
    if (!loading) {
      dispatch(getCampList({ page, query }));
    }
  }, [page, query]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(page + 1);
    }
  }, [inView]);

  useEffect(() => {
    setAllCamp(item?.pagenation?.totalCount);
  }, [query, item]);

  // 지역 옵션 선택값
  const [location, setLocation] = useState("");

  // const locationRegex = (location) => {
  //   switch (location) {
  //     case "경북":
  //       return "경북|경상북도";
  //     case "경남":
  //       return "경남|경상남도";
  //     case "전북":
  //       return "전북|전라북도";
  //     case "전남":
  //       return "전남|전라남도";
  //     case "충북":
  //       return "충북|충청북도";
  //     case "충남":
  //       return "충남|충청남도";
  //     default:
  //       return location;
  //   }
  // };

  // 전체 캠핑장 데이터 필터링 함수
  // const handleFilter = () => {
  //   return item.item.filter((v) =>
  //     new RegExp(locationRegex(location)).test(v.addr1)
  //   );
  // };
  // const handleFilter = () => {
  //   let result;
  //   if (!loading && item && item.length > 0) {
  //     console.log(item);
  //     result = item.item.filter((v) =>
  //       new RegExp(locationRegex(location)).test(v.addr1)
  //     );
  //   }
  // };

  // useEffect(() => {
  //   setCampList(result);
  //   // setAllCamp(handleFilter().length);
  //   handleFilter();
  // }, [location]);

  // useEffect(() => {
  //   console.log(campList);
  //   setAllCamp(campList.length);
  // }, [campList]);

  return loading ? (
    "loading..."
  ) : (
    <div>
      {/* 결과값이 실패인 경우 에러메시지 표시, 성공인 경우 목록 컴포넌트 호출 */}
      {rt !== 200 ? (
        <div>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <>
          <SearchHeader getLocation={setLocation} />

          <ResultCountCount>
            <h2>
              캠핏 검색결과 <span id="search_result_count">{allCamp}개</span>
            </h2>
          </ResultCountCount>

          {item.item.length === 0 ? (
            <div>검색결과가 없습니다.</div>
          ) : (
            <>
              {item.item.map((v, i) => (
                <SearchResultBox item={v} key={i} />
              ))}
              {item.item.length > 3 && item.item.length !== allCamp && (
                <div ref={ref}></div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
