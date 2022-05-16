import BasicHeaderBar from "../components/BasicHeaderBar";
import CampListGrid from "../components/CampListGrid";
import { getExhibitionCamp } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
  }
`;

const Exhibition = () => {
  const BACK = process.env.REACT_APP_BACK;
  const { id } = useParams();
  const { isLoading, data } = useQuery("Exhibition", () =>
    getExhibitionCamp(id)
  );

  return isLoading ? (
    "Now Loading..."
  ) : (
    <Container>
      <BasicHeaderBar title={data[0].title} />
      <div className="exhi_img_box">
        <img src={BACK + data[0].photo} alt={data[0].title} />
      </div>
      <div className="exhi_list_container">
        {data.map((v) => (
          <CampListGrid item={v} key={v.campId} />
        ))}
      </div>
    </Container>
  );
};

export default Exhibition;
