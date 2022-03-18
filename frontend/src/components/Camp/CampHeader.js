import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CampHeaderBar = styled.div`
  top: 0px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;

  .pop_chev {
    position: absolute;
    display: flex;
    align-items: center;
    left: 20px;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
  }

  .pop_title {
    font-size: 20px;
    font-weight: bold;
  }
`;

const CampHeader = () => {
  let go = useNavigate();
  return (
    <CampHeaderBar>
      <div className="pop_chev">
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
    </CampHeaderBar>
  );
};

export default CampHeader;
