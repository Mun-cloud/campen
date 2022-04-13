import ItemHeader from "../components/Commu/CommuItem/ItemHeader";
import ItemProfile from "../components/Commu/CommuItem/ItemProfile";
import ItemCnt from "../components/Commu/CommuItem/ItemCnt";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <ItemHeader />
      <ItemProfile />
      <ItemCnt />
    </>
  );
};

export default Board;
