import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicHeaderBar from "../components/BasicHeaderBar";
import CampListGrid from "../components/CampListGrid";
import { getUserData } from "../slices/UserSlice";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 60px;
  min-height: 100vh;

  .exhi_img_box {
    width: 100%;
    margin-bottom: 8px;
  }

  .exhi_img_box img {
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: cover;
  }

  .exhi_list_container {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px 41px;
    justify-content: space-between;

    > p {
      margin: auto;
      padding-top: 50px;
    }
  }
`;

const Heart = () => {
  const dispatch = useDispatch();
  const go = useNavigate();
  const { isLoading } = useSelector((state) => state.user);
  const [hearts, setHearts] = useState();

  useEffect(() => {
    (async () => {
      try {
        let data = (
          await axios.get(`https://campen-server.herokuapp.com/member/info`)
        ).data.item;
        dispatch(getUserData({ user_id: data.user_id, user_pw: data.user_pw }));
        setHearts(
          (
            await axios.get(
              `https://campen-server.herokuapp.com/hearts/${data.id}`
            )
          ).data.item
        );
      } catch (err) {
        alert("로그인 페이지로 이동합니다.");
        go("/login");
      }
    })();
  }, []);

  return (
    <Container>
      {isLoading ? null : (
        <>
          <BasicHeaderBar title="좋아요 한 목록" />
          <div className="exhi_list_container">
            {!hearts || hearts.length === 0 ? (
              <p>좋아요 한 목록이 없습니다.</p>
            ) : (
              hearts.map((v) => (
                <CampListGrid item={v} heart={"true"} key={v.id} />
              ))
            )}
          </div>
        </>
      )}
    </Container>
  );
};

export default Heart;
