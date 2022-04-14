import ItemHeader from "../components/Commu/CommuItem/ItemHeader";
import ItemProfile from "../components/Commu/CommuItem/ItemProfile";
import ItemCnt from "../components/Commu/CommuItem/ItemCnt";
import ItemCntFooter from "../components/Commu/CommuItem/ItemCntFooter";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Board = () => {
  const { id } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/content/${id}`);
        setContent(response.data.item[0]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  return (
    <>
      <ItemHeader />
      <ItemProfile content={content} />
      <ItemCnt content={content} />
      <ItemCntFooter />
    </>
  );
};

export default Board;
