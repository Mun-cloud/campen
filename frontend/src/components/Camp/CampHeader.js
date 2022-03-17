import { useNavigate } from "react-router-dom";

const CampHeader = () => {
  let go = useNavigate();
  return (
    <div className="pop_header">
      <div className="pop_chev go_main">
        <i
          onClick={() => go(-1)}
          className="fas fa-chevron-left"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <div
        onClick={() => go("/")}
        className="pop_title"
        style={{ cursor: "pointer" }}
      >
        CAMPEN
      </div>
    </div>
  );
};

export default CampHeader;
