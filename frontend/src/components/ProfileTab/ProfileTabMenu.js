import { useEffect, useState } from "react";
import styled from "styled-components";

const TabContainer = styled.ul`
  max-width: 530px;
  height: 45px;
  width: 100%;
  top: 0px;
  background-color: ${(props) => props.theme.white};
  display: flex;
`;

const TabItem = styled.li`
  display: inline-block;
  height: 45px;
  width: 50%;

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

const ProfileTabMenu = ({ content, tabValue }) => {
  const [selectedTab, setSelectedTab] = useState("게시글");
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  useEffect(() => {
    let leftCount = 0;
    let rightCount = 0;
    content?.contents.forEach((v) => {
      if (v.tab === 0 || v.tab === 2) {
        leftCount++;
      } else if (v.tab === 1) {
        rightCount++;
      }
      setLeft(leftCount);
      setRight(rightCount);
    });
  }, [content]);

  return (
    <>
      {/* 상단 탭메뉴 */}
      <TabContainer>
        <TabItem>
          <div
            id="게시글"
            onClick={(e) => {
              setSelectedTab(e.target.id);
              tabValue(e.target.id);
            }}
            className={selectedTab === "게시글" ? "active" : ""}
          >
            {`게시글 ${left}`}
          </div>
        </TabItem>
        <TabItem>
          <div
            id="캠핑후기"
            onClick={(e) => {
              setSelectedTab(e.target.id);
              tabValue(e.target.id);
            }}
            className={selectedTab === "캠핑후기" ? "active" : ""}
          >
            {`캠핑후기 ${right}`}
          </div>
        </TabItem>
      </TabContainer>
    </>
  );
};

export default ProfileTabMenu;
