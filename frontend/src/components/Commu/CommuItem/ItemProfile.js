import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CntBox = styled.div`
  background: rgb(255, 255, 255);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .cnt-box-txt {
    padding: 13px;
    line-height: 24px;
  }

  .cnt-category {
    display: inline-block;
    margin-top: 8px;
    padding: 0px 5px;
    margin-bottom: 15px;
    background: rgb(234, 238, 236);
    border-radius: 3px;
    color: #555;
    font-weight: 500;
    font-size: 9pt;
  }

  .cnt-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cnt-user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cnt-user-img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid rgb(201, 207, 204);
    object-fit: cover;
  }

  .cnt-user-name {
    display: flex;
    font-size: 11pt;
    font-weight: 500;
    color: #333;
  }

  .cnt-time {
    color: #999;
    font-weight: 400;
    font-size: 9pt;
  }
`;

const ItemProfile = ({ content }) => {
  // UTC 시간 변환 기능
  const [reg, setReg] = useState();
  useEffect(() => {
    let dateObj = new Date(content.reg_date);
    setReg(dateObj.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
  }, [content]);

  let category = "";
  if (content) {
    if (content.tab === 0) {
      category = "캠핑한컷";
    } else if (content.tab === 1) {
      category = "캠핑후기";
    } else if (content.tab === 2) {
      category = "궁금해요";
    }
  }

  return (
    <div>
      <CntBox>
        {/* 프로필, 컨텐츠 업로드 시간 */}
        <div className="cnt-box-txt">
          <div className="cnt-category">{category}</div>

          <ul className="cnt-profile">
            <Link to={`/profile/${content.members_id}`}>
              <li className="cnt-user">
                <img
                  className="cnt-user-img"
                  src={require("../../../assets/img/user-img.png")}
                  alt="캠퍼1103"
                />
                <span className="cnt-user-name">
                  {content.nickname
                    ? content.nickname
                    : `캠퍼${content.members_id}`}
                </span>
              </li>
            </Link>
            <li className="cnt-time">{reg}</li>
          </ul>
        </div>
      </CntBox>
    </div>
  );
};

export default ItemProfile;
