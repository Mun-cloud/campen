// import CommuHeader from "../components/Commu/CommuHeader";
import CommuCnt from "../components/Commu/CommuCnt";
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
      <CommuWrite />
    </div>
  );
};

export default Commu;
