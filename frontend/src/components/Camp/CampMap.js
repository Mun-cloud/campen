import styled from "styled-components";

const MapBox = styled.section`
  img {
    width: 100%;
    height: fit-content;
    border-radius: 10px;
  }

  .caption {
    margin-top: 8px;
    color: rgb(90, 94, 91);
    font-size: 12px;
  }
`;

const CampMap = () => {
  return (
    <MapBox className="camp_container" id="camp_map">
      <div className="box_title">캠핑존 배치도</div>
      <img src={require("../../assets/img/camp_map.jpg")} alt="배치도" />
      <div className="caption">지도를 터치하여 크게 볼 수 있습니다.</div>
    </MapBox>
  );
};

export default CampMap;
