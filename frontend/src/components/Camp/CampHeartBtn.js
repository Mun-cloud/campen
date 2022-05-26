import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CampHeartBtn = ({ item }) => {
  const go = useNavigate();
  const [heartOn, setHeartOn] = useState(false);
  const { item: user } = useSelector((state) => state.user);

  // 유저의 캠프 찜한 목록을 가져옴
  useEffect(() => {
    if (item && user) {
      (async () => {
        try {
          const res = await axios.get(`/api/hearts/${item.id}`);
          if (res.data.item.find((v) => v.camp_id === item.id) !== undefined) {
            setHeartOn(true);
          }
        } catch (err) {
          alert(err.response.data.rtmsg);
        }
      })();
    }
  }, [item, user]);
  // 좋아요 클릭시 이벤트
  const onClick = async () => {
    if (!user) {
      if (window.confirm("로그인후 이용하시겠습니까?")) {
        go("/login");
      } else {
        return null;
      }
    }
    if (heartOn) {
      // 좋아요 등록되어 있을 시
      try {
        await axios.delete(`/api/hearts`, {
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
        await axios.post(`/api/hearts`, {
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
    <div className="camp_heart" onClick={onClick}>
      <i className={heartOn ? "fas fa-heart" : "far fa-heart"}></i> 좋아요
    </div>
  );
};

export default CampHeartBtn;
