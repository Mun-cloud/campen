import { Link } from "react-router-dom";
import BasicHeaderBar from "../components/BasicHeaderBar";
import { getExhibition } from "../api";
import { useQuery } from "react-query";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const SImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ExhiList = () => {
  const { isLoading, data } = useQuery("allExhibition", getExhibition);

  return isLoading ? (
    "Now Loading..."
  ) : (
    <Container>
      <BasicHeaderBar title="기획전" />
      {data.map((v) => {
        return (
          <Link to={`/exhibition/${v.id}`} key={v.id}>
            <SImage src={process.env.REACT_APP_BACK + v.photo} alt={v.title} />
          </Link>
        );
      })}
    </Container>
  );
};

export default ExhiList;
