import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopContainer = styled.div`
  top: 0px;
  padding-top: 3px;
  height: 55px;
  width: 100%;
  display: flex;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(241, 245, 243);

  .back-btn {
    width: 50px;
  }

  .back-btn span {
    height: 100%;
    cursor: pointer;
  }

  .logo {
    margin: 0 auto;
    padding-right: 50px;
  }

  .logo3 {
    margin: 0 auto;
  }

  .logo img,
  .logo3 img {
    width: 90px;
  }

  .option-btn {
    width: 50px;
  }
  .option-btn span {
    height: 100%;
    cursor: pointer;
  }
`;

const ItemHeader = () => {
  const go = useNavigate();
  return (
    <>
      {/* <!-- header: 상세 상단 --> */}
      <TopContainer>
        <div
          className="back-btn"
          onClick={() => {
            go(-1);
          }}
        >
          <span className="material-icons">keyboard_backspace</span>
        </div>

        <Link to="/" className="logo">
          <img
            src={require("../../../assets/img/campen_logo.png")}
            alt="campen"
          />
        </Link>
      </TopContainer>
    </>
  );
};

export default ItemHeader;
