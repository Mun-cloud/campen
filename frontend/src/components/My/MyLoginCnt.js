import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: block;
  font-size: 11pt;
  color: rgb(37, 40, 38);
  cursor: pointer;

  .my-div {
    width: 100%;
    min-height: 40px;
    line-height: 40px;
    margin-top: 8px;
    padding: 20px 20px;
    background: ${(props) => props.theme.white};
    cursor: pointer;
    border-top: none;
  }
`;

const MyLoginCnt = () => {
  const { item } = useSelector((state) => state.user);
  return (
    <>
      {/* <!-- 공지사항,설정,고객센터 박스  --> */}
      <Box>
        <Link className="my-content" to={`/profile/${item.id}`}>
          <div className="my-div">내가 작성한글</div>
        </Link>
      </Box>

      <Box>
        <Link className="my-notice" to="/notice">
          <div className="my-div">공지사항</div>
        </Link>
      </Box>

      <Box>
        <Link className="my-set" to="/usersetting">
          <div className="my-div">설정</div>
        </Link>
      </Box>
    </>
  );
};

export default MyLoginCnt;
