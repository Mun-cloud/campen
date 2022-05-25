import styled from "styled-components";

const MannerTimeBox = styled.section`
  .time_area {
    width: 100%;
    display: flex;
    padding: 14px 0px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.darkDarkGreen};
    margin-bottom: 16px;
  }

  .time_area_box {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .time_area_box:first-child {
    border-right: 1px solid ${(props) => props.theme.darkGreen};
  }

  .time {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 6px;
    color: ${(props) => props.theme.darkMainColor};
  }

  .time_text {
    color: ${(props) => props.theme.darkMainColor};
    opacity: 0.6;
    font-weight: 500;
  }

  .manner_article {
    color: ${(props) => props.theme.darkGray};
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
  }
`;

const CampMannerTime = ({ item }) => {
  return (
    <MannerTimeBox>
      <div className="box_title">매너타임</div>
      <div className="time_area">
        <div className="time_area_box">
          <div className="time">{item.manner_start}</div>
          <div className="time_text">매너타임 시작</div>
        </div>
        <div className="time_area_box">
          <div className="time">{item.manner_end}</div>
          <div className="time_text">매너타임 종료</div>
        </div>
      </div>
      <p className="manner_article">
        매너타임은 수면을 위해 활동을 최소화하는 시간을 말합니다. 다른 캠퍼를
        배려하여 소음을 최대한 줄여주시기 바랍니다.
      </p>
    </MannerTimeBox>
  );
};

export default CampMannerTime;
