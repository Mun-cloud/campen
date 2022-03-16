const CampMannerTime = () => {
  return (
    <section className="camp_container" id="manner_time">
      <div className="box_title">매너타임</div>
      <div className="time_area">
        <div className="time_area_box">
          <div className="time">오후 11:00</div>
          <div className="time_text">매너타임 시작</div>
        </div>
        <div className="time_area_box">
          <div className="time">오전 7:00</div>
          <div className="time_text">매너타임 종료</div>
        </div>
      </div>
      <p className="manner_article">
        매너타임은 수면을 위해 활동을 최소화하는 시간을 말합니다. 다른 캠퍼를
        배려하여 소음을 최대한 줄여주시기 바랍니다.
      </p>
    </section>
  );
};

export default CampMannerTime;
