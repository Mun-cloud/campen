import CampBasicInfo from "../components/Camp/CampBasicInfo";
import CampFacility from "../components/Camp/CampFacility";
import CampIntro from "../components/Camp/CampIntro";
import CampLog from "../components/Camp/CampLog";
import CampMannerTime from "../components/Camp/CampMannerTime";
import CampMap from "../components/Camp/CampMap";
import CampPolicy from "../components/Camp/CampPolicy";
import CampPolicyPop from "../components/Camp/CampPolicyPop";
import CampSwiperScroll from "../components/Camp/CampSwiperScroll";
import CampTitleBox from "../components/Camp/CampTitleBox";
import Footer from "../components/Footer";
import CampHeader from "../components/Camp/CampHeader";
import SearchSwiper from "../components/Search/SearchSwiper";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
  const [popView, setPopView] = useState(false);
  const [pictures, setPictuers] = useState();
  const [thisCamp, setThisCamp] = useState([]);

  // 팝업 구현. 하위컴포넌트에서 데이터 받기
  const popViewFunction = (popView) => {
    setPopView(popView);
  };

  useEffect(() => {
    (async () => {
      let response;
      try {
        response = await axios.get(`/campdata/${id}`);
        setThisCamp(response.data.item[0]);
      } catch (err) {
        console.error(err);
      }
      try {
        const APIurl =
          "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList";
        const KEY =
          "5APlXd7ZkPeuONbcZe2isYf2o238wB9owyYEmdkJEV7AeGwMGLtF2cB2ku18d/iA5dcfs9UX/wA+qck++FPT3A==";

        const urlParams = {
          params: {
            ServiceKey: KEY,
            MobileOS: "ETC",
            MobileApp: "AppTest",
            contentId: response.data.item[0].contentId,
          },
        };
        const photorespon = await axios.get(APIurl, urlParams);
        setPictuers(photorespon.data.response.body);
      } catch (err) {
        console.error(err);
      }
      if (response.data.item.length < 1) {
        alert("캠핑장 정보가 존재하지 않습니다.");
        go("/search");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {})();
  }, []);

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
          <CampHeader item={thisCamp} />
          {pictures === undefined ? null : (
            <SearchSwiper item={thisCamp} pictures={pictures} />
          )}
          <CampTitleBox item={thisCamp} />
          <CampSwiperScroll item={thisCamp} />
          <CampBasicInfo item={thisCamp} />
          <CampIntro item={thisCamp} />
          {thisCamp.basic_fac && thisCamp.add_fac && (
            <CampFacility item={thisCamp} />
          )}
          {thisCamp.manner_start && thisCamp.manner_end && (
            <CampMannerTime item={thisCamp} />
          )}
          <CampPolicy item={thisCamp} popViewFunction={popViewFunction} />
          {popView ? <CampPolicyPop popViewFunction={popViewFunction} /> : null}
          <CampMap item={thisCamp} />
          <CampLog item={thisCamp} />
          <Footer />
        </CampPage>
      )}
    </>
  );
};

export default Camp;
