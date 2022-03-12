import IndexHeader from "../components/Index/IndexHeader";
import IndexTitle from "../components/Index/IndexTitle";
import IndexCampFilter from "../components/Index/IndexCampFilter";
import IndexEventSlide from "../components/Index/IndexEventSlide";
import IndexBestPhoto from "../components/Index/IndexBestPhoto";
import IndexCamplog from "../components/Index/IndexCamplog";
import IndexExhibition from "../components/Index/IndexExhibition";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div style={{ width: "100%", margin: "auto", padding: "15px" }}>
      <IndexHeader />
      <IndexTitle />
      <IndexCampFilter />
      <IndexEventSlide />
      <IndexBestPhoto />
      <IndexCamplog />
      <IndexExhibition />
      <Footer />
    </div>
  );
};

export default Index;
