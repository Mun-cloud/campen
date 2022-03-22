import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TabContainer = styled.ul`
  max-width: 530px;
  height: 45px;
  width: 100%;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(212, 217, 214);
  position: fixed;
  display: flex;
  z-index: 1000;
`;

const TabItem = styled.li`
  display: inline-block;
  height: 45px;
  width: 25%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 10.5pt;
    font-weight: 500;
    color: #666;
    cursor: pointer;
  }
`;

const CommuHeader = () => {
  return (
    <div>
      {/* 상단 탭메뉴 */}
      <TabContainer>
        {["전체보기", "캠핑후기", "캠핑한컷", "궁금해요"].map((data, index) => (
          <TabItem data-tab={`tab${index + 1}`}>
            <NavLink
              to={`commu${index + 1}.html`}
              style={({ isActive }) => ({
                borderBottom: isActive && "2px solid #43C083",
                color: isActive ? "#43C083" : "#444",
              })}
            >
              {data}
            </NavLink>
          </TabItem>
        ))}
      </TabContainer>
    </div>
  );
};

export default CommuHeader;
