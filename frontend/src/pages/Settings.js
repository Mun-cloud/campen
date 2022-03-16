import BasicHeaderBar from "../components/BasicHeaderBar";

const Settings = () => {
  return (
    <div>
      <BasicHeaderBar title="설정" />
      <a href="#">
        <div className="settings_container">내 정보 수정</div>
      </a>
      <div>
        <a href="term1.html">
          <div className="settings_container">서비스 이용약관</div>
        </a>
        <a href="term2.html">
          <div className="settings_container">개인정보 처리방침</div>
        </a>
      </div>
      <a href="#">
        <div className="settings_container">회원탈퇴</div>
      </a>
    </div>
  );
};

export default Settings;
