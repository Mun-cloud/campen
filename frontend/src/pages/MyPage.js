import MyLogin from "../components/My/MyLogin";
import MyLogout from "../components/My/MyLogout";
import { useSelector } from "react-redux";

const MyPage = () => {
  const { login } = useSelector((state) => state.user);

  return <div>{login ? <MyLogin /> : <MyLogout />}</div>;
};

export default MyPage;
