import IndexHeader from "../components/Index/IndexHeader";
import IndexTitle from "../components/Index/IndexTitle";
import IndexCampFilter from "../components/Index/IndexCampFilter";
import IndexEventSlide from "../components/Index/IndexEventSlide";
import IndexBestPhoto from "../components/Index/IndexBestPhoto";
import IndexCamplog from "../components/Index/IndexCamplog";
import IndexExhibition from "../components/Index/IndexExhibition";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";

const Index = ({ handleNavView }) => {
  const [user, setUser] = useState();
  const checkLogin = async () => {
    try {
      let res = await axios.get("/member/info");
      console.log(res);
      setUser(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div style={{ padding: "15px" }}>
        <IndexHeader />
        <IndexTitle />
        <IndexCampFilter />
        <IndexEventSlide />
        <IndexBestPhoto />
        <IndexCamplog />
        <IndexExhibition />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
