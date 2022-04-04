import CommuHeader from "../components/Commu/CommuHeader";
import CommuCnt from "../components/Commu/CommuCnt";
import CommuCntFooter from "../components/Commu/CommuCntFooter";
import CommuWrite from "../components/Commu/CommuWrite";
import { useEffect } from "react";
import axios from "axios";

const Commu = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/content");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // const [tab, setTab] = useState("0");

  const commuTab = (tab) => {
    console.log(tab);
  };

  return (
    <div>
      <CommuHeader tab={commuTab} />

      <CommuCnt />
      <CommuCntFooter />
      <CommuWrite />
    </div>
  );
};

export default Commu;
