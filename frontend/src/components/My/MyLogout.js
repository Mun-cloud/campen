import styled from "styled-components";
import MyLogoutSignUp from "./MyLogoutSignUp";
import MyLogoutCnt from "./MyLogoutCnt";

const MyContainer = styled.div`
  height: 100vh;
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

const MyLogout = () => {
  return (
    <MyContainer>
      <MyLogoutSignUp />
      <MyLogoutCnt />
    </MyContainer>
  );
};

export default MyLogout;
