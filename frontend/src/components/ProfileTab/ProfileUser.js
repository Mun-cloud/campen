import styled from "styled-components";

const UserProfile = styled.div`
  background: rgb(255, 255, 255);
  padding: 31px 0px 24px;
  border-bottom: 0.5px solid rgb(201, 207, 204);

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
    margin-top: 16px;
    text-align: center;
    font-size: 15pt;
    font-weight: 600;
  }
`;

const ProfileUser = ({ content }) => {
  return !content ? null : (
    <>
      {/*  <!-- 유저프로필 --> */}
      <UserProfile>
        <img src={require("../../assets/img/user-img.png")} alt="프로필" />
        <div className="user-name">
          {content.nickname ? content.nickname : `캠퍼${content.id}`}
        </div>
      </UserProfile>
    </>
  );
};

export default ProfileUser;
