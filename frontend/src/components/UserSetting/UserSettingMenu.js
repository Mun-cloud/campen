import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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

  .phone,
  .img-upload,
  .nickname,
  .password,
  .sns,
  .event-set span {
    cursor: pointer;
  }
`;

const UserSettingMenu = () => {
  const { item: user } = useSelector((state) => state.user);
  const go = useNavigate();

  const logout = async () => {
    try {
      await axios.delete("/member/logout");
      alert("로그아웃 되었습니다.");
      window.location.replace("/");
    } catch (err) {
      console.error(err);
      alert(err.rtmsg);
    }
  };

  return (
    <UserContainer>
      <label className="img-upload" htmlFor="upload-button">
        <div className="user-div">프로필 사진 변경</div>
        <input type="file" id="upload-button" accept="image/*" />
      </label>

      <Link to="/nickname">
        <div className="nickname user-div">
          닉네임
          <span>{user.nickname}</span>
        </div>
      </Link>

      <div className="id user-div">
        아이디
        <span>{user.user_id}</span>
      </div>

      <Link to="/password">
        <div className="password user-div">
          비밀번호
          <span>{"*".repeat(user.user_pw.length)}</span>
        </div>
      </Link>

      <div className="email user-div">
        이메일
        <span>{user.email}</span>
      </div>

      <Link to="/sns">
        <div className="sns user-div">SNS</div>
      </Link>

      <div className="phone user-div" onClick={logout}>
        로그아웃
      </div>
    </UserContainer>
  );
};

export default UserSettingMenu;
