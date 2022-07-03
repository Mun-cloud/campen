// import CommuHeader from "../components/Commu/CommuHeader";
import CommuCnt from "../components/Commu/CommuCnt";
import CommuWrite from "../components/Commu/CommuWrite";
import { useEffect, useState } from "react";
import CommuHeader from "../components/Commu/CommuHeader";
import axios from "axios";

const Commu = () => {
  // 탭 선택값 state
  const [seletedTab, setSelectedTab] = useState("전체보기");
  const [data, setData] = useState();

  // 탭 값에 따라 컨텐츠 filter
  useEffect(() => {
    (async () => {
      let originData = [];
      let filterData = [];
      try {
        originData = (await axios.get(`/api/content`)).data.item;
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
      // eslint-disable-next-line default-case
      switch (seletedTab) {
        case "캠핑한컷":
          filterData = originData.filter((v) => {
            if (v.tab === 0) {
              return true;
            } else {
              return false;
            }
          });
          break;
        case "캠핑후기":
          filterData = originData.filter((v) => {
            if (v.tab === 1) {
              return true;
            } else {
              return false;
            }
          });
          break;
        case "궁금해요":
          filterData = originData.filter((v) => {
            if (v.tab === 2) {
              return true;
            } else {
              return false;
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
      {/* 상단 탭 메뉴 */}
      <CommuHeader getTabValue={setSelectedTab} />
      {/* 내용 영역 */}
      <CommuCnt data={data} />
      {/* 글 쓰기 버튼 */}
      <CommuWrite />
    </div>
  );
};

export default Commu;
