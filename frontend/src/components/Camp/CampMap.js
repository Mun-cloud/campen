import styled from "styled-components";

const MapBox = styled.section`
  img {
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    cursor: pointer;
  }

  .caption {
    margin-top: 8px;
    color: rgb(90, 94, 91);
    font-size: 12px;
  }
`;

const CampMap = ({ item }) => {
  const onClick = () => {
    window.open(
      item.photo,
      "new",
      "scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no"
    );
  };

  if (item.photo === undefined) {
    return null;
  } else {
    return (
      <MapBox className="camp_container" id="camp_map">
        <div className="box_title">캠핑장 안내 이미지</div>
        <img src={item.photo} alt="배치도" onClick={onClick} />
        <div className="caption">지도를 터치하여 크게 볼 수 있습니다.</div>
      </MapBox>
    );
  }
};

export default CampMap;
