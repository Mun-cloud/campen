import ProfileHeader from "../components/ProfileTab/ProfileHeader";
import ProfileUser from "../components/ProfileTab/ProfileUser";
import ProfileTabMenu from "../components/ProfileTab/ProfileTabMenu";
import ProfileCnt from "../components/ProfileTab/ProfileCnt";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/member/${id}`);
        setContent(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <ProfileUser content={content} />
      <ProfileTabMenu />
      <ProfileCnt content={content} />
    </>
  );
};

export default Profile;
