import ProfileHeader from "../components/ProfileTab/ProfileHeader";
import ProfileUser from "../components/ProfileTab/ProfileUser";
import ProfileTabMenu from "../components/ProfileTab/ProfileTabMenu";
import ProfileCnt from "../components/ProfileTab/ProfileCnt";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
`;

const Profile = () => {
  const { id } = useParams();
  const [content, setContent] = useState();
  const [tab, setTab] = useState("게시글");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/member/${id}`);
        setContent(response.data);
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
    })();
  }, [id]);

  return (
    <Container>
      <ProfileHeader />
      <ProfileUser content={content} />
      <ProfileTabMenu content={content} tabValue={setTab} />
      <ProfileCnt content={content} tabValue={tab} />
    </Container>
  );
};

export default Profile;
