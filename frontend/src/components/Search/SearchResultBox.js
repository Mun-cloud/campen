import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchSwiper from "./SearchSwiper";
import SearchTagBox from "./SearchTagBox";
import { useEffect, useState } from "react";
import axios from "axios";

const ResultInfo = styled.div`
  width: 100%;
  height: 85px;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #050606;
  cursor: pointer;

  #camp_class {
    opacity: 0.5;
  }

  #camp_name {
    font-size: 13px;
    font-weight: bold;
    margin: 5px 0;
  }

  #camp_log_box {
    color: rgb(67, 192, 131);
  }

  .result_charge {
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  #charge {
    font-size: 20px;
  }
`;

const SearchResultBox = ({ item }) => {
  const navigate = useNavigate();
  const [pictures, setPictuers] = useState();

  useEffect(() => {
    (async () => {
      try {
        const APIurl =
          "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList";
        const KEY =
          "5APlXd7ZkPeuONbcZe2isYf2o238wB9owyYEmdkJEV7AeGwMGLtF2cB2ku18d/iA5dcfs9UX/wA+qck++FPT3A==";

        const urlParams = {
          params: {
            ServiceKey: KEY,
            MobileOS: "ETC",
            MobileApp: "AppTest",
            contentId: item.contentId,
          },
        };
        const response = await axios.get(APIurl, urlParams);
        setPictuers(response.data.response.body);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  return (
    <div>
      {pictures !== undefined ? (
        <SearchSwiper item={item} pictures={pictures} />
      ) : null}
      <ResultInfo
        onClick={() => {
          navigate(`/camp/${item.id}`);
        }}
      >
        <div className="result_text">
          <div className="rusult_info">
            <div id="camp_class">{item.addr1}</div>
            <div id="camp_name">{item.name}</div>
          </div>
          <div id="camp_log_box">
            캠핑로그 <span id="camp_log_count">184</span>개
          </div>
        </div>
        <div className="result_charge">
          <span id="charge">40,000</span>원 부터
        </div>
      </ResultInfo>
      <SearchTagBox />
    </div>
  );
};

export default SearchResultBox;
