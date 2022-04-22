// import CommuHeader from "../components/Commu/CommuHeader";
import CommuCnt from "../components/Commu/CommuCnt";
import CommuWrite from "../components/Commu/CommuWrite";
import { useEffect, useState } from "react";
import CommuHeader from "../components/Commu/CommuHeader";
import axios from "axios";

const Commu = () => {
  const [seletedTab, setSelectedTab] = useState("전체보기");
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      let originData = [];
      let filterData = [];
      try {
        originData = (await axios.get("/content")).data.item;
      } catch (error) {
        console.error(error);
      }
      // eslint-disable-next-line default-case
      switch (seletedTab) {
        case "캠핑한컷":
          filterData = originData.filter((v) => {
            if (v.tab === 0) {
              return true;
            }
          });
          break;
        case "캠핑후기":
          filterData = originData.filter((v) => {
            if (v.tab === 1) {
              return true;
            }
          });
          break;
        case "궁금해요":
          filterData = originData.filter((v) => {
            if (v.tab === 2) {
              return true;
            }
          });
          break;
        case "전체보기":
          filterData = originData;
          break;
      }
      setData(filterData);
    })();
  }, [seletedTab]);

  return (
    <div>
      <CommuHeader getTabValue={setSelectedTab} />
      <CommuCnt data={data} />
      <CommuWrite />
    </div>
  );
};

export default Commu;
