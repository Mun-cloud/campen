import BasicHeaderBar from "../components/BasicHeaderBar";

const Join = () => {
  return (
    <div>
      <BasicHeaderBar title="약관동의" />
      <div className="check_box">
        <label>
          <input type="checkbox" id="check_all" />
          전체동의하기
        </label>
        <div className="check_list" id="term1">
          <label>
            <input type="checkbox" className="check_term" />
            서비스 이용약관 (필수)
          </label>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="check_list" id="term2">
          <label>
            <input type="checkbox" className="check_term" />
            개인정보 처리방침 (필수)
          </label>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="check_list" id="term3">
          <label>
            <input type="checkbox" className="check_term" />
            이벤트/마케팅 수신동의 (선택)
          </label>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Join;
