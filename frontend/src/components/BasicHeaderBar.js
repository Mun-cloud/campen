import { useNavigate } from "react-router-dom";

const BasicHeaderBar = ({ title }) => {
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
      <div className="pop_title">{title}</div>
    </div>
  );
};

export default BasicHeaderBar;
