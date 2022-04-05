// import CommuHeader from "../components/Commu/CommuHeader";
import CommuCnt from "../components/Commu/CommuCnt";
import CommuCntFooter from "../components/Commu/CommuCntFooter";
import CommuWrite from "../components/Commu/CommuWrite";
import { useState } from "react";
import CommuHeader from "../components/Commu/CommuHeader";

const Commu = () => {
  const [data, setData] = useState();
  const getData = (data) => {
    setData(data);
  };
  return (
    <div>
      <CommuHeader getData={getData} />
      <CommuCnt data={data} />
      <CommuCntFooter />
      <CommuWrite />
    </div>
  );
};

export default Commu;
