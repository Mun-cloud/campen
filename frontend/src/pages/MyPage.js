import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyLogin from "../components/My/MyLogin";
import MyLogout from "../components/My/MyLogout";
import { getUserData } from "../slices/UserSlice";

const MyPage = () => {
  const dispatch = useDispatch();
  const { isLoading, item } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      try {
        let data = (
          await axios.get(`https://campen-server.herokuapp.com/member/info`)
        ).data.item;
        dispatch(getUserData({ user_id: data.user_id, user_pw: data.user_pw }));
      } catch (err) {}
    })();
  }, []);

  return <>{isLoading ? null : item !== null ? <MyLogin /> : <MyLogout />}</>;
};

export default MyPage;
