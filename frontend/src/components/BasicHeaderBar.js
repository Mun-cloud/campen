import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Pop = styled.div`
  position: relative;
  top: 0px;
  left: auto;
  right: auto;
  z-index: 2000;
  width: 100%;
  height: 53px;
  background: rgb(255, 255, 255);
`;

const HeaderBar = styled.div`
  top: 0px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.lightGray};

  .pop_chev {
    position: absolute;
    display: flex;
    align-items: center;
    left: 20px;
    cursor: pointer;
    font-size: 17px;
    padding: 10px;
  }
`;

const BasicHeaderBar = ({ title }) => {
  const go = useNavigate();
  return (
    <Pop>
      <HeaderBar className="pop_header">
        <div className="pop_chev go_main">
          <i
            onClick={() => go(-1)}
            className="fas fa-chevron-left"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <div className="pop_title">{title}</div>
      </HeaderBar>
    </Pop>
  );
};

export default BasicHeaderBar;
