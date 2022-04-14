import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const ProfileTabMenu = () => {
  return (
    <>
      {/*탭메뉴 */}
      <TabContainer>
        {["게시글1", "게시글2"].map((data, index) => (
          <TabItem data-tab={`tab${index + 1}`}>
            <NavLink
              to={`profile1-${index + 1}.html`}
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
    </>
  );
};

export default ProfileTabMenu;
