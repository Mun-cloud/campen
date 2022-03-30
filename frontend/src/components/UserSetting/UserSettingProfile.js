import { Link } from "react-router-dom";
import styled from "styled-components";

const Profile = styled.div`
  background: rgb(255, 255, 255);
  padding: 31px 0px 24px;

  img {
    display: block;
    margin: 0px auto;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    border: 1px solid rgb(201, 207, 204);
    background-clip: border-box;
    object-fit: cover;
  }

  .user-name {
    margin-top: 15px;
    text-align: center;
    font-size: 14pt;
    font-weight: 500;
  }

  .user-intro,
  .user-intro span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    font-size: 11pt;
    font-weight: 500;
    color: rgb(26, 29, 27);
    line-height: 15px;
  }

  .user-intro span {
    padding-bottom: 4px;
    margin-left: 4px;
  }

  .my-user-intro span {
    font-size: 10pt;
    font-weight: 700;
    margin-left: 5px;
  }
`;

const UserSettingProfile = () => {
  return (
    <>
      {/* <!-- 유저프로필 --> */}
      <Profile>
        <img src={require("../../assets/img/user-img.png")} alt="프로필" />
        <div class="user-name">인생한번</div>
        <Link class="user-intro" to="/userintro">
          <p>나는 자연인을 꿈꿉니다.</p>
          <span class="material-icons"> edit</span>
        </Link>
      </Profile>
    </>
  );
};

export default UserSettingProfile;
