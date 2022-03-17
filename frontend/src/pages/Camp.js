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
import CampImgSlide from "../components/Camp/CampImgSlide";
import CampHeader from "../components/Camp/CampHeader";

const Camp = () => {
  return (
    <div>
      <CampHeader />
      <CampImgSlide />
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
    </div>
  );
};

export default Camp;
