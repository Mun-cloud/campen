import styled from "styled-components";

import UserSettingHeader from "../components/UserSetting/UserSettingHeader";
import UserSettingProfile from "../components/UserSetting/UserSettingProfile";
import UserSettingMenu from "../components/UserSetting/UserSettingMenu";

const UserContainer = styled.div`
  max-width: 530px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: rgb(241, 245, 243);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const UserSetting = () => {
  return (
    <>
      <UserContainer>
        <UserSettingHeader />
        <UserSettingProfile />
        <UserSettingMenu />
      </UserContainer>
    </>
  );
};

export default UserSetting;
