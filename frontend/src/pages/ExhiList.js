import { Link } from "react-router-dom";
import BasicHeaderBar from "../components/BasicHeaderBar";

const ExhiList = () => {
  return (
    <div>
      <BasicHeaderBar title="기획전" />
      <Link to={`/exhibition/1`}>
        <img
          src={require("../assets/img/event_slide_08.png")}
          alt="장박 캠핑장"
        />
      </Link>
      <Link to={`/exhibition/2`}>
        <img
          src={require("../assets/img/event_slide_09.png")}
          alt="반려동물 캠핑장"
        />
      </Link>
      <Link to={`/exhibition/3`}>
        <img
          src={require("../assets/img/event_slide_10.png")}
          alt="치유 캠핑장"
        />
      </Link>
    </div>
  );
};

export default ExhiList;
