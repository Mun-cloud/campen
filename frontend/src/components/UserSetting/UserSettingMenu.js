import styled from "styled-components";
import { Link } from "react-router-dom";

const UserContainer = styled.div`
  .user-div {
    width: 100%;
    max-width: 530px;
    min-height: 30px;
    line-height: 30px;
    margin-top: 4px;
    padding: 15px 25px;
    background: rgb(255, 255, 255);
    font-size: 10.5pt;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-div span {
    color: #666;
  }

  .img-upload input {
    display: none;
  }

  .event p {
    font-size: 9pt;
    color: #666;
  }
  .event-set span {
    font-size: 35pt;
  }

  .img-upload,
  .nickname,
  .password,
  .sns,
  .event-set span {
    cursor: pointer;
  }
`;

const UserSettingMenu = () => {
  return (
    <>
      {/* <!-- 세부세팅기능 --> */}
      <UserContainer>
        <label className="img-upload" for="upload-button">
          <div className="user-div">프로필 사진 변경</div>
          <input type="file" id="upload-button" accept="image/*" />
        </label>

        <Link to="/nickname">
          <div className="nickname user-div">
            닉네임
            <span> 인생한번</span>
          </div>
        </Link>

        <div className="id user-div">
          아이디
          <span> ssonnni</span>
        </div>

        <Link to="/password">
          <div className="password user-div">
            비밀번호
            <span>**********</span>
          </div>
        </Link>

        <div className="email user-div">
          이메일
          <span> sohyun@gmail.com</span>
        </div>

        <div className="phone user-div">
          휴대폰 번호
          <span>010-1234-5678</span>
        </div>

        <Link to="/sns">
          <div className="sns user-div">SNS</div>
        </Link>

        <div className="event-set user-div">
          <div className="event">
            이벤트/마케팅 수신 동의
            <p>회원가입 시 설정됨</p>
          </div>
          <div>
            <span className="material-icons">toggle_on</span>
          </div>
        </div>
      </UserContainer>
    </>
  );
};

export default UserSettingMenu;
