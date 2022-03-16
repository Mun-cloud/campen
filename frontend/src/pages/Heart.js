import BasicHeaderBar from "../components/BasicHeaderBar";
import CampListGrid from "../components/CampListGrid";

const Heart = () => {
  return (
    <div>
      <BasicHeaderBar title="좋아요 한 목록" />
      <div className="exhi_list_container">
        {/* exhi 데이터베이스.map */}
        <CampListGrid heart="true" />
      </div>
    </div>
  );
};

export default Heart;
