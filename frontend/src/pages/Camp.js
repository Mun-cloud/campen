import CampBasicInfo from "../components/Camp/CampBasicInfo";
import CampFacility from "../components/Camp/CampFacility";
import CampIntro from "../components/Camp/CampIntro";
import CampLog from "../components/Camp/CampLog";
import CampMannerTime from "../components/Camp/CampMannerTime";
import CampMap from "../components/Camp/CampMap";
import CampPolicy from "../components/Camp/CampPolicy";
import CampPolicyPop from "../components/Camp/CampPolicyPop";
import CampRefundBusiness from "../components/Camp/CampRefundBusiness";
import CampSwiperScroll from "../components/Camp/CampSwiperScroll";
import CampTitleBox from "../components/Camp/CampTitleBox";
import CampRefundPop from "../components/Camp/CampRefundPop";
import CampBusinessPop from "../components/Camp/CampBusinessPop";
import Footer from "../components/Footer";
import CampHeader from "../components/Camp/CampHeader";
import SearchSwiper from "../components/Search/SearchSwiper";

import styled from "styled-components";

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
  return (
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
      <CampPolicyPop />
      <CampMap />
      <CampLog />
      <CampRefundBusiness />
      <CampRefundPop />
      <CampBusinessPop />
      <Footer />
    </CampPage>
  );
};

export default Camp;
