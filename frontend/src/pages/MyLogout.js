import styled from "styled-components";
import MyLogoutSignUp from "../components/My/MyLogoutSignUp";
import MyLogoutCnt from "../components/My/MyLogoutCnt";

const MyContainer = styled.div`
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

const MyLogout = () => {
  return (
    <>
      <MyContainer>
        <MyLogoutSignUp />
        <MyLogoutCnt />
      </MyContainer>
    </>
  );
};

export default MyLogout;
