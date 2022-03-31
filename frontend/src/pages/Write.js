import styled from "styled-components";
import { useState } from "react";

import WriteHeader from "../components/Write/WriteHeader";
import WriteCnt from "../components/Write/WriteCnt";
import WriteButton from "../components/Write/WriteButton";

const Container = styled.div`
  max-width: 530px;
  margin-left: auto;
  margin-right: auto;
`;

const Write = () => {
  const [text, setText] = useState("");
  const [tab, setTab] = useState("0");

  function textCnt(text) {
    setText(text);
  }

  function getTab(tab) {
    setTab(tab);
  }

  return (
    <>
      <Container>
        <WriteHeader />
        <WriteCnt textCnt={textCnt} getTab={getTab} />

        <WriteButton text={text} tab={tab} />
      </Container>
    </>
  );
};

export default Write;
