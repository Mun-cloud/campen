import styled from "styled-components";
import { useEffect, useState } from "react";

import WriteHeader from "../components/Write/WriteHeader";
import WriteCnt from "../components/Write/WriteCnt";
import WriteButton from "../components/Write/WriteButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [imgs, setImgs] = useState();

  useEffect(() => {
    !isLoading && item.length === 0 && go("/login");
  }, []);

  const cntText = (text) => {
    setText(text);
  };

  const cntTab = (tab) => {
    setTab(tab);
  };

  // 게시글 업로드
  const postCommu = async () => {
    try {
      // 텍스트값 전송
      const response = await axios.post("/content", {
        tab,
        content: text,
        memberId: item.id,
      });

      // 업로드 한 이미지가 있을 경우 실행
      if (imgs) {
        // 이미지 데이터 형식 처리
        const formdata = new FormData();
        imgs.forEach((v) => {
          formdata.append("photo", v);
        });
        const config = {
          Headers: {
            "content-type": "multipart/form-data",
          },
        };
        // 이미지 데이터 전송
        const res = await axios.post("/upload/multiple", formdata, config);
        // 멀티 이미지 각각을 데이터베이스에 저장
        await axios.post("/contents/img", {
          src: res.data.item,
          contentId: response.data.item[0].id,
        });
        alert("게시글이 등록되었습니다.");
        go("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <WriteHeader />
        <WriteCnt cntText={cntText} cntTab={cntTab} setImgs={setImgs} />

        <WriteButton btnText={text} postCommu={postCommu} />
      </Container>
    </>
  );
};

export default Write;
