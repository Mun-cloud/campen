import { Link } from "react-router-dom";
import styled from "styled-components";

const AlarmIcon = styled.i`
  font-size: 23px;
  margin-left: 10px;
`;

const IndexHeaderBox = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IndexHeader = () => {
  return (
    <IndexHeaderBox>
      {/* <!-- 로고 영역 --> */}
      <Link to="/">
        <img
          src={require("../../assets/img/campen_logo.png")}
          alt="홈페이지로 이동"
          style={{ width: "96px" }}
        />
      </Link>
      {/* <!-- 우측 상단 영역 --> */}
      <div id="alarmArea">
        <Link to="/notice">
          <AlarmIcon className="far fa-bell"></AlarmIcon>
        </Link>
        <Link to="/heart">
          <AlarmIcon className="far fa-heart"></AlarmIcon>
        </Link>
      </div>
    </IndexHeaderBox>
  );
};

export default IndexHeader;
