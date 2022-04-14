import styled from "styled-components";
import MyLoginCnt from "./MyLoginCnt";
import MyLoginProfile from "./MyLoginProfile";

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

const MyLogin = () => {
  return (
    <MyContainer>
      <MyLoginProfile />
      <MyLoginCnt />
    </MyContainer>
  );
};

export default MyLogin;
