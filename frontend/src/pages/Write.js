import styled from "styled-components";
import { useEffect, useState } from "react";

import WriteHeader from "../components/Write/WriteHeader";
import WriteCnt from "../components/Write/WriteCnt";
import WriteButton from "../components/Write/WriteButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Write = () => {
  const { isLoading, item } = useSelector((state) => state.user);
  const go = useNavigate();
  const [text, setText] = useState("");
  const [tab, setTab] = useState("0");

  useEffect(() => {
    !isLoading && item.length === 0 && go("/join");
  }, []);

  const cntText = (text) => {
    setText(text);
  };

  const cntTab = (tab) => {
    setTab(tab);
  };

  return (
    <>
      <Container>
        <WriteHeader />
        <WriteCnt cntText={cntText} cntTab={cntTab} />

        <WriteButton btnText={text} cntTab={tab} />
      </Container>
    </>
  );
};

export default Write;
