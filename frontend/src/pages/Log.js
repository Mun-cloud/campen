import ItemHeader from "../components/Commu/CommuItem/ItemHeader";
import ItemProfile from "../components/Commu/CommuItem/ItemProfile";
import ItemCnt from "../components/Commu/CommuItem/ItemCnt";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Log = () => {
  const { id } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/content/${id}`);
        setContent(response.data.item);
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
    })();
  }, [id]);

  return !content ? null : (
    <>
      <ItemHeader content={content} />
      <ItemProfile content={content} />
      <ItemCnt content={content} />
    </>
  );
};

export default Log;
