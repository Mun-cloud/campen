import styled from "styled-components";

const TitleSection = styled.section`
  .camp_name {
    font-size: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .camp_class {
    margin-bottom: 10px;
    color: rgb(90, 94, 91);
  }

  .camp_title {
    font-size: 22px;
    margin-bottom: 8px;
  }

  .camp_log_count {
    color: rgb(67, 192, 131);
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
  // 주소 합치기
  let addr = "";
  if (item[0].addr1) {
    addr += item[0].addr1;
  }
  if (item[0].addr2) {
    addr += item[0].addr2;
  }

  return (
    <TitleSection className="camp_container no_margin">
      <div className="camp_box">
        <div className="camp_name">
          <div className="camp_class">{addr}</div>
          <div className="camp_title">{item[0].name}</div>
          <div className="camp_log_count">캠핑로그 187</div>
        </div>
        <div className="camp_price">
          <span>40,000</span>원 부터
        </div>
      </div>
    </TitleSection>
  );
};

export default CampTitleBox;
