import { useState } from "react";
import styled from "styled-components";

const CampIntroBox = styled.section`
  #camp_intro_article {
    line-height: 22px;
    white-space: pre-line;
    color: rgb(90, 94, 91);
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
    background-color: rgba(62, 204, 121, 0.18);
    border-radius: 20px;
    color: rgb(34, 119, 88);
    font-size: 13px;
  }

  .camp_btn {
    margin-top: 20px;
    width: 100%;
    height: 46px;
    border: 1px solid rgb(212, 217, 214);
    border-radius: 8px;
    background-color: white;
    color: rgb(37, 40, 38);
    font-size: 14px;
  }
`;

const CampIntro = ({ item }) => {
  console.log(item.intro);
  const [detail, setDetail] = useState(false);
  const onClick = () => {
    detail ? setDetail(false) : setDetail(true);
  };

  return (
    <CampIntroBox>
      <div className="box_title">캠핑장 소개</div>
      <p id="camp_intro_article" className={detail ? "" : "close"}>
        {item.intro}
      </p>
      <div className={detail ? "intro_tag_box" : "intro_tag_box hidden"}>
        <div className="intro_tag">#서울인근캠핑장</div>
        <div className="intro_tag">#경기도캠핑장</div>
        <div className="intro_tag">#키즈캠핑장</div>
        <div className="intro_tag">#용인캠핑장</div>
        <div className="intro_tag">#애견동반캠핑장</div>
        <div className="intro_tag">#온수수영장</div>
        <div className="intro_tag">#바이킹캠핑장</div>
        <div className="intro_tag">#그늘막캠핑장</div>
        <div className="intro_tag">#시설좋은캠핑장</div>
      </div>
      <button className="camp_btn" id="intro_toggle" onClick={onClick}>
        {detail ? "캠핑장 소개 더보기" : "접기"}
      </button>
    </CampIntroBox>
  );
};

export default CampIntro;
