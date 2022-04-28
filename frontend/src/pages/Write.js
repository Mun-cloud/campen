import styled from "styled-components";
import { useEffect, useState } from "react";

import WriteHeader from "../components/Write/WriteHeader";
import WriteCnt from "../components/Write/WriteCnt";
import WriteButton from "../components/Write/WriteButton";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
  const { id: commuId } = useParams();

  useEffect(() => {
    if (commuId) {
      (async () => {
        const res = await axios.get(`/content/${commuId}`);
        setText(res.data.item.content);
        setTab(res.data.item.tab);
      })();
    }
  }, [commuId]);

  useEffect(() => {
    !isLoading && item === null && go("/login");
  });

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
      if (imgs && !imgs.length) {
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
      alert(err.response.data.rtmsg);
    }
  };

  // 게시글 수정
  const putCommu = async () => {
    try {
      // 텍스트값 전송
      await axios.put(`/content/${commuId}`, {
        tab,
        content: text,
        memberId: item.id,
      });
      alert("게시글이 수정되었습니다.");
      go("/commu");
    } catch (err) {
      alert(err.response.data.rtmsg);
    }
  };

  return (
    <>
      <Container>
        <WriteHeader />
        <WriteCnt
          cntText={setText}
          cntTab={setTab}
          setImgs={setImgs}
          prevText={text}
          prevTab={tab}
        />

        <WriteButton
          btnText={text}
          postCommu={commuId ? putCommu : postCommu}
        />
      </Container>
    </>
  );
};

export default Write;
