import styled from "styled-components";
import CampHeartBtn from "./CampHeartBtn";

const TitleSection = styled.section`
  .camp_name {
    font-size: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .camp_class {
    margin-bottom: 10px;
    color: rgb(90, 94, 91);
  }

  .camp_title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .camp_heart {
    color: rgb(67, 192, 131);
    cursor: pointer;
  }

  .camp_price {
    margin-top: 16px;
  }

  .camp_price > span {
    font-size: 22px;
    font-weight: 700;
  }
`;

const CampTitleBox = ({ item }) => {
  return (
    <TitleSection className="camp_container no_margin">
      <div className="camp_box">
        <div className="camp_name">
          <div className="camp_class">{item.lineIntro}</div>
          <div className="camp_title">{item.name}</div>
          <CampHeartBtn item={item} />
        </div>
        <div className="camp_price">
          <span>{item.price}</span>원 부터
        </div>
      </div>
    </TitleSection>
  );
};

export default CampTitleBox;
