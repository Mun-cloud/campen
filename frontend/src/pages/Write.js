import styled from "styled-components";

import WriteHeader from "../components/Write/WriteHeader";
import WriteCnt from "../components/UserSetting/SubUserSettingMenu/WriteCnt";
import WriteButton from "../components/Write/WriteButton";

const Container = styled.div`
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
`;

const Write = () => {
  return (
    <>
      <Container>
        <WriteHeader />
        <WriteCnt />
        <WriteButton />
      </Container>
    </>
  );
};

export default Write;
