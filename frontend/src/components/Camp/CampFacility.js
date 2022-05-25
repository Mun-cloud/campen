import styled from "styled-components";

const FacilityBox = styled.section`
  .basic_facility {
    width: 100%;
    display: flex;
    border-top: 1px solid ${(props) => props.theme.nomalGray};
    border-bottom: 1px solid ${(props) => props.theme.nomalGray};
    padding-top: 12px;
  }

  .additional_facility {
    width: 100%;
    display: flex;
    padding-top: 12px;
  }

  .facility_title {
    width: 20%;
    color: ${(props) => props.theme.darkMainColor};
    font-weight: bold;
  }

  .facility_area {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
  }

  .facility {
    width: 25%;
    height: 40px;
  }

  .facility > span {
    text-align: center;
    display: block;
    width: 90px;
    padding: 8px 0;
    background-color: ${(props) => props.theme.darkDarkGreen};
    border-radius: 20px;
    color: ${(props) => props.theme.darkMainColor};
    font-size: 13px;
  }
`;

const CampFacility = ({ item }) => {
  return (
    <FacilityBox className="camp_container" id="facility">
      <div className="box_title">시설 및 레저</div>
      {item.basic_fac === undefined ? null : (
        <div className="basic_facility">
          <div className="facility_title">기본시설</div>
          <div className="facility_area">
            {item.basic_fac.split(",").map((basic, index) => (
              <div className="facility" key={index}>
                <span>{basic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {item.add_fac === undefined ? null : (
        <div className="additional_facility">
          <div className="facility_title">부가시설</div>
          <div className="facility_area">
            {item.add_fac.split(",").map((add, index) => (
              <div className="facility" key={index}>
                <span>{add}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </FacilityBox>
  );
};

export default CampFacility;
