import { useState } from "react";
import styled from "styled-components";

const CampIntroBox = styled.section`
  #camp_intro_article {
    line-height: 22px;
    white-space: pre-line;
    color: ${(props) => props.theme.darkGray};
    font-size: 13px;
  }

  .close {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    text-align: left;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .intro_tag_box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
  }

  .intro_tag_box.hidden {
    display: none;
  }

  .intro_tag {
    padding: 6px 10px;
    margin: 4px 4px 0px 0px;
    background-color: ${(props) => props.theme.darkDarkGreen};
    border-radius: 20px;
    color: ${(props) => props.theme.darkMainColor};
    font-size: 13px;
  }

  .camp_btn {
    margin-top: 20px;
    width: 100%;
    height: 46px;
    border: 1px solid ${(props) => props.theme.nomalGray};
    border-radius: 8px;
    background-color: white;
    color: rgb(37, 40, 38);
    font-size: 14px;
  }
`;

const CampIntro = ({ item }) => {
  const [detail, setDetail] = useState(false);
  const onClick = () => {
    detail ? setDetail(false) : setDetail(true);
  };

  return (
    <CampIntroBox>
      <div className="box_title">캠핑장 소개</div>
      {/* state값에 따른 내용 길이 변경(className값 변경) */}
      <p id="camp_intro_article" className={detail ? "" : "close"}>
        {item.intro}
      </p>
      {/* 태그값 유무 확인 */}
      {item.tag && (
        // state 값에 따른 태그값 표시 유무(className 값 변경)
        <div className={detail ? "intro_tag_box" : "intro_tag_box hidden"}>
          {/* 태그값을 정렬화하여 값 앞에 #을 붙여주고 반복문 수행 */}
          {item.tag
            .split(", ")
            .map((word) => (word.startsWith("#") ? word : `#${word}`))
            .map((tag, index) => (
              <div className="intro_tag" key={index}>
                {tag}
              </div>
            ))}
        </div>
      )}
      {/* state값에 따라 버튼 내용 변경 */}
      <button className="camp_btn" id="intro_toggle" onClick={onClick}>
        {detail ? "접기" : "캠핑장 소개 더보기"}
      </button>
    </CampIntroBox>
  );
};

export default CampIntro;
