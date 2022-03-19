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
