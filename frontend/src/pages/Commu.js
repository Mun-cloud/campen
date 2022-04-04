import CommuHeader from "../components/Commu/CommuHeader";
import CommuCnt from "../components/Commu/CommuCnt";
import CommuCntFooter from "../components/Commu/CommuCntFooter";
import CommuWrite from "../components/Commu/CommuWrite";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
>>>>>>> 01b14f6519e7267eb77348f95f0dc01a96c66e5a
import axios from "axios";

const Commu = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/content");
        setData(response.data.item);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const [data, setData] = useState();

  // const [dataFilter, setDataFilter] = useState(data);
  // console.log(dataFilter);
  const commuTab = (tab) => {
    Commu();
    let tab0 = [];

    if (tab === "캠핑한컷") {
      tab0 = data.filter(function (v) {
        if (v.tab === 0) {
          return true;
        }
      });
    } else if (tab === "캠핑후기") {
      tab0 = data.filter(function (v) {
        if (v.tab === 1) {
          return true;
        }
      });
    } else if (tab === "궁금해요") {
      tab0 = data.filter(function (v) {
        if (v.tab === 2) {
          return true;
        }
      });
    }
    console.log(tab0);
    setData(tab0);
  };

  return (
    <div>
      <CommuHeader tab={commuTab} />

      <CommuCnt dataFilter={data} />
      {/* <button onClick={tabClick}>gkdl </button>/ */}
      <CommuCntFooter />
      <CommuWrite />
    </div>
  );
};

export default Commu;
