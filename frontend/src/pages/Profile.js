import ProfileHeader from "../components/ProfileTab/ProfileHeader";
import ProfileUser from "../components/ProfileTab/ProfileUser";
import ProfileCnt from "../components/ProfileTab/ProfileCnt";
import ProfileCntFooter from "../components/ProfileTab/ProfileCntFooter";
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
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <ProfileUser />
      <ProfileCnt content={content} />
      <ProfileCntFooter />
    </>
  );
};

export default Profile;
