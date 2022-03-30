import { Link } from "react-router-dom";
import styled from "styled-components";

const Writebtn = styled.div`
  position: fixed;
  bottom: 130px;
  width: 100%;
  max-width: 530px;

  .write-button-click {
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #43c083;
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    border-radius: 50%;
    text-decoration: none;
    cursor: pointer;
  }

  .write-click {
    color: #fff;
    font-size: 18pt;
  }
`;

const CommuWrite = () => {
  return (
    <div>
      {/* <!-- 글쓰기 버튼 --> */}
      <Writebtn>
        <Link className="write-button-click" to="/write">
          <span className="material-icons write-click">edit</span>
        </Link>
      </Writebtn>
    </div>
  );
};

export default CommuWrite;
