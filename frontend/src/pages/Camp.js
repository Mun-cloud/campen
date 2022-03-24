import CampBasicInfo from "../components/Camp/CampBasicInfo";
import CampFacility from "../components/Camp/CampFacility";
import CampIntro from "../components/Camp/CampIntro";
import CampLog from "../components/Camp/CampLog";
import CampMannerTime from "../components/Camp/CampMannerTime";
import CampMap from "../components/Camp/CampMap";
import CampPolicy from "../components/Camp/CampPolicy";
import CampSwiperScroll from "../components/Camp/CampSwiperScroll";
import CampTitleBox from "../components/Camp/CampTitleBox";
import Footer from "../components/Footer";
import CampHeader from "../components/Camp/CampHeader";
import SearchSwiper from "../components/Search/SearchSwiper";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogList } from "../slices/BlogSlice";
import { Oval } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";

const CampPage = styled.div`
  position: relative;
  background-color: #eaeeec;
  section {
    background-color: #fff;
    padding: 24px 20px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
  }

  #zero_padding {
    padding: 0;
  }

  .no_margin {
    margin-bottom: 0;
  }

  .box_title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .camp_btn {
    margin-top: 20px;
    width: 100%;
    height: 46px;
    border: 1px solid rgb(212, 217, 214);
    border-radius: 8px;
    background-color: white;
    color: rgb(37, 40, 38);
    font-size: 14px;
  }
`;

const Camp = () => {
  let { id } = useParams();
  const go = useNavigate();

  // 리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.camp);

  // 현재 주소창 id값의 해당하는 데이터를 store의 item 값에서 찾아서 thisCamp에 저장.
  const thisCamp = item.find((v) => {
    if (v.id === id) {
      return true;
    }
  });

  return (
    <>
      {/* 결과값이 실패인 경우 에러메시지 표시, 성공인 경우 목록 컴포넌트 호출 */}
      {thisCamp === undefined ? (
        <button
          onClick={() => {
            go(-1);
          }}
        >
          뒤로가기
        </button>
      ) : (
        <CampPage>
          <CampHeader />
          <SearchSwiper />
          <CampTitleBox />
          <CampSwiperScroll />
          <CampBasicInfo />
          <CampIntro />
          <CampFacility />
          <CampMannerTime />
          <CampPolicy />
          <CampMap />
          <CampLog />
          <Footer />
        </CampPage>
      )}
    </>
  );
};

export default Camp;
