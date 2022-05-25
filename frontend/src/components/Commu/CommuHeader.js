import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TabContainer = styled.ul`
  max-width: 530px;
  height: 45px;
  width: 100%;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid ${(props) => props.theme.nomalGray};
  position: fixed;
  display: flex;
  z-index: 1000;
`;

const TabItem = styled.li`
  display: inline-block;
  height: 45px;
  width: 25%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 10.5pt;
    font-weight: 500;
    color: #444;
    cursor: pointer;

    &.active {
      border-bottom: 2px solid #43c083;
      color: #43c083;
    }
  }
`;

const CommuHeader = ({ getTabValue }) => {
  const [seletedTab, setSelectedTab] = useState("전체보기");
  useEffect(() => {
    getTabValue(seletedTab);
  }, [seletedTab, getTabValue]);

  return (
    <div>
      {/* 상단 탭메뉴 */}
      <TabContainer>
        <TabItem>
          <div
            id="전체보기"
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
            className={seletedTab === "전체보기" ? "active" : ""}
          >
            전체보기
          </div>
        </TabItem>
        <TabItem>
          <div
            id="캠핑후기"
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
            className={seletedTab === "캠핑후기" ? "active" : ""}
          >
            캠핑후기
          </div>
        </TabItem>
        <TabItem>
          <div
            id="캠핑한컷"
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
            className={seletedTab === "캠핑한컷" ? "active" : ""}
          >
            캠핑한컷
          </div>
        </TabItem>
        <TabItem>
          <div
            id="궁금해요"
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
            className={seletedTab === "궁금해요" ? "active" : ""}
          >
            궁금해요
          </div>
        </TabItem>
      </TabContainer>
    </div>
  );
};

export default CommuHeader;
