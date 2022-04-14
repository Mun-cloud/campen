import { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.ul`
  max-width: 530px;
  height: 45px;
  width: 100%;
  top: 0px;
  background-color: rgb(255, 255, 255);
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
  console.log(content);

  const [seletedTab, setSelectedTab] = useState("게시글");

  tabValue(seletedTab);

  return (
    <>
      {/* 상단 탭메뉴 */}
      <TabContainer>
        <TabItem>
          <div
            id="게시글"
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
            className={seletedTab === "게시글" ? "active" : ""}
          >
            게시글
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
      </TabContainer>
    </>

    // <>
    //   {/*탭메뉴 */}
    //   <TabContainer>
    //     {["게시글1", "게시글2"].map((data, index) => (
    //       <TabItem data-tab={`tab${index + 1}`}>
    //         <NavLink
    //           to={`profile1-${index + 1}.html`}
    //           style={({ isActive }) => ({
    //             borderBottom: isActive && "2px solid #43C083",
    //             color: isActive ? "#43C083" : "#444",
    //           })}
    //         >
    //           {data}
    //         </NavLink>
    //       </TabItem>
    //     ))}
    //   </TabContainer>
    // </>
  );
};

export default ProfileTabMenu;
