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
  // 유저 정보 수신
  const { isLoading, item } = useSelector((state) => state.user);
  const go = useNavigate();
  // 게시글 텍스트 state
  const [text, setText] = useState("");
  // 게시글 수정 시 이미지 추가 업로드 제한
  const [imgUploadHide, setImgUploadHide] = useState(false);
  // 게시글 탭 value 저장 state
  const [tab, setTab] = useState("0");
  // 게시글 이미지 저장 state
  const [imgs, setImgs] = useState([]);
  // 커뮤니티 아이디 값 params에서 받기
  const { id: commuId } = useParams();

  // 게시글 수정으로 접속 시 게시글 데이터 수신하여 출력
  useEffect(() => {
    if (commuId) {
      (async () => {
        const res = await axios.get(`/api/content/${commuId}`);
        setText(res.data.item.content);
        setTab(res.data.item.tab);
        setImgUploadHide(true);
      })();
    }
  }, [commuId]);

  // 로그인 정보 없을 시 로그인 페이지 이동
  useEffect(() => {
    !isLoading && item === null && go("/login");
  });

  // 게시글 업로드
  const postCommu = async () => {
    try {
      // 텍스트값 전송
      const response = await axios.post(`/api/content`, {
        tab,
        content: text,
        memberId: item.id,
      });
      // 업로드 한 이미지가 있을 경우 실행
      if (imgs.length > 0) {
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
        const res = await axios.post(`/api/upload/multiple`, formdata, config);
        // 멀티 이미지 각각을 데이터베이스에 저장
        await axios.post(`/api/contents/img`, {
          src: res.data.item,
          contentId: response.data.item[0].id,
        });
      }
      alert("게시글이 등록되었습니다.");
      go("/commu");
    } catch (err) {
      alert(err.response.data.rtmsg);
    }
  };

  // 게시글 수정
  const putCommu = async () => {
    try {
      // 텍스트값 전송
      await axios.put(`/api/content/${commuId}`, {
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
          imgUploadHide={imgUploadHide}
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
