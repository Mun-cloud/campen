import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ProfileCntFooter from "./ProfileCntFooter";

const CntContainer = styled.div`
  display: block;
  margin-bottom: 1px;
  padding: 0px 20px 60px;
  background: ${(props) => props.theme.white};
`;
const CntBox = styled.div`
  padding: 20px 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-child {
    border-bottom: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cnt-date {
    color: rgb(159, 165, 162);
    font-size: 9pt;
    font-weight: 500;
    line-height: 100%;
  }

  .cnt-body {
    margin: 10px 0px;
    width: 70%;
  }

  .cnt {
    align-self: flex-start;
    width: 73%;
  }

  .cnt-title {
    margin: 10px 0;
    font-weight: 500;
    font-size: 13pt;
    line-height: 100%;
  }

  .cnt-content {
    font-size: 10pt;
    color: rgb(159, 165, 162);
    line-height: 150%;
    font-weight: 400;
    overflow: hidden;
    /* 말줄임표시 */
    text-overflow: ellipsis;
    /* 두줄 제한 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .cnt-img img {
    margin: 4px 0px;
    border-radius: 8px;
    display: block;
    width: 55px;
    height: 55px;
    object-fit: cover;
  }
`;

const ProfileCnt = ({ item, tabValue }) => {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    if (item && tabValue) {
      let filterArr = [];
      if (tabValue === "게시글") {
        filterArr = item.contents.filter((v) => {
          if (v.tab === 0 || v.tab === 2) {
            return true;
          } else {
            return false;
          }
        });
      } else if (tabValue === "캠핑후기") {
        filterArr = item.contents.filter((v) => {
          if (v.tab === 1) {
            return true;
          } else {
            return false;
          }
        });
      }
      setFilter(filterArr);
    }
  }, [item, tabValue]);

  return !item ? null : (
    <CntContainer>
      {filter &&
        filter.map((v) => (
          <>
            <CntBox>
              <Link to={`/board/${v.contentId}`}>
                {/*  <!-- 컨텐츠 내용 --> */}
                <div className="cnt-body">
                  {/*  <!-- 날짜 --> */}
                  <div className="cnt-date">
                    {new Date(v.reg_date).toLocaleString("ko-KR", {
                      timeZone: "Asia/Seoul",
                    })}
                  </div>
                  <div className="cnt">
                    {/* 탭 이름 */}
                    <h3 className="cnt-title">
                      {v.tab === 0
                        ? "캠핑한컷"
                        : v.tab === 1
                        ? "캠핑후기"
                        : "궁금해요"}
                    </h3>
                    {/* 게시글 요약 표시 */}
                    <div className="cnt-content">{v.content}</div>
                    {/* 좋아요, 댓글쓰기 */}
                    <ProfileCntFooter
                      hide={v.tab === 1 ? true : false}
                      content={v}
                    />
                  </div>
                </div>
                {/*  <!-- 이미지 --> */}
                {v.photo ? (
                  <div className="cnt-img">
                    <img src={v.photo} alt={v.content} />
                  </div>
                ) : null}
              </Link>
            </CntBox>
          </>
        ))}
    </CntContainer>
  );
};

export default ProfileCnt;
