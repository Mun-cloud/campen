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
  const BACK = process.env.REACT_APP_BACK;
  /** @data : 기획전 목록 */
  const { isLoading, data } = useQuery("allExhibition", getExhibition);

  return isLoading ? (
    "Now Loading..."
  ) : (
    <Container>
      <BasicHeaderBar title="기획전" />
      {data.map((v) => {
        return (
          <Link to={`/exhibition/${v.id}`} key={v.id}>
            {/* 기획전 타이틀 이미지 출력 */}
            <SImage src={BACK + v.photo} alt={v.title} />
          </Link>
        );
      })}
    </Container>
  );
};

export default ExhiList;
