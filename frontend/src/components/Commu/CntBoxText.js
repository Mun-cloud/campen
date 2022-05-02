import { useEffect, useState } from "react";
import styled from "styled-components";

const CntBoxTextBox = styled.div`
  padding: 13px;
  line-height: 24px;

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

  .cnt-Q::before {
    margin-right: 2px;
    content: "Q.";
    color: rgb(67, 192, 131);
    font-size: 14pt;
    font-weight: 500;
  }

  .cnt-desc,
  .cnt-Q {
    padding-top: 10px;
    overflow: hidden;
    white-space: normal;
    text-align: left;
    font-size: 10pt;
    color: #333;
  }

  .cnt-local {
    display: flex;
    padding-top: 10px;
    font-size: 9pt;
    color: #666;
    font-weight: 400;
    align-items: center;
  }
  .local-txt {
    margin-top: 2px;
    margin-left: 5px;
  }
`;

const CntBoxText = ({ data, locationMark }) => {
  // UTC 시간 변환 기능
  const [reg, setReg] = useState();
  useEffect(() => {
    let dateObj = new Date(data.reg_date);
    setReg(dateObj.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }));
  }, [data]);

  return (
    <CntBoxTextBox>
      <div className="cnt-category">
        {/* 탭 값에 따라 출력내용 변경 */}
        {data.tab === 0 ? "캠핑한컷" : data.tab === 1 ? "캠핑후기" : "궁금해요"}
      </div>
      <ul className="cnt-profile">
        <li className="cnt-user">
          <img
            className="cnt-user-img"
            src={
              data.userPhoto
                ? data.userPhoto
                : require("../../assets/img/user-img.png")
            }
            alt={data.nickname ? data.nickname : `캠퍼${data.members_id}`}
          />
          <span className="cnt-user-name">
            {data.nickname ? data.nickname : `캠퍼${data.members_id}`}
          </span>
        </li>
        <li className="cnt-time">{reg}</li>
      </ul>

      <p className="cnt-desc">{data.content}</p>

      {/* <!-- 컨텐츠:위치정보 --> */}
      {!locationMark ? null : (
        <div className="cnt-local">
          <i className="fas fa-map-marker-alt"></i>
          <span className="local-txt">{data.camp_id}</span>
        </div>
      )}
    </CntBoxTextBox>
  );
};

export default CntBoxText;
