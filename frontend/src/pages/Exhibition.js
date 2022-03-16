import BasicHeaderBar from "../components/BasicHeaderBar";
import CampListGrid from "../components/CampListGrid";

const Exhibition = () => {
  return (
    <div>
      <BasicHeaderBar title="우리집 댕댕이랑 캠핑가요" />
      <div className="exhi_img_box">
        <img
          src={require("../assets/img/event_slide_09.png")}
          alt="반려동물 캠핑장"
        />
      </div>
      <div className="exhi_list_container">
        {/* exhi 데이터베이스.map */}
        <CampListGrid />
      </div>
    </div>
  );
};

export default Exhibition;
