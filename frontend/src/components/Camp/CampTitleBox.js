import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TitleSection = styled.section`
  .camp_name {
    font-size: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .camp_class {
    margin-bottom: 10px;
    color: rgb(90, 94, 91);
  }

  .camp_title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .camp_heart {
    color: rgb(67, 192, 131);
    cursor: pointer;
  }

  .camp_price {
    margin-top: 16px;
  }

  .camp_price > span {
    font-size: 22px;
    font-weight: 700;
  }
`;

const CampTitleBox = ({ item }) => {
  const [heartOn, setHeartOn] = useState(false);
  const { item: user } = useSelector((state) => state.user);

  // 유저의 캠프 찜한 목록을 가져옴
  useEffect(() => {
    if (item && user) {
      (async () => {
        try {
          const res = await axios.get(`/hearts/${item.id}`);
          if (res.data.item.find((v) => v.camp_id === user.id) !== undefined) {
            setHeartOn(true);
          }
        } catch (err) {
          alert(err.response.data.rtmsg);
        }
      })();
    }
  }, [item]);

  // 좋아요 클릭시 이벤트
  const onClick = async () => {
    if (heartOn) {
      // 좋아요 등록되어 있을 시
      try {
        await axios.delete("/hearts", {
          data: {
            user_id: user.id,
            camp_id: item.id,
          },
        });
        setHeartOn(false);
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
    } else {
      // 좋아요 등록되어 있지 않을 시
      try {
        await axios.post("/hearts", {
          user_id: user.id,
          camp_id: item.id,
        });
        setHeartOn(true);
      } catch (err) {
        alert(err.response.data.rtmsg);
      }
    }
  };

  return (
    <TitleSection className="camp_container no_margin">
      <div className="camp_box">
        <div className="camp_name">
          <div className="camp_class">{item.lineIntro}</div>
          <div className="camp_title">{item.name}</div>
          <div className="camp_heart" onClick={onClick}>
            <i className={heartOn ? "fas fa-heart" : "far fa-heart"}></i> 좋아요
          </div>
        </div>
        <div className="camp_price">
          <span>{item.price}</span>원 부터
        </div>
      </div>
    </TitleSection>
  );
};

export default CampTitleBox;
