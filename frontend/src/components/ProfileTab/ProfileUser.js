import styled from "styled-components";

const UserProfile = styled.div`
  background: ${(props) => props.theme.white};
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

const ProfileUser = ({ item }) => {
  return !item ? null : (
    <>
      {/*  <!-- 유저프로필 --> */}
      <UserProfile>
        <img
          src={
            item.photo ? item.photo : require("../../assets/img/user-img.png")
          }
          alt={item.nickname ? item.nickname : `캠퍼${item.id}`}
        />
        <div className="user-name">
          {item.nickname ? item.nickname : `캠퍼 ${item.id}`}
        </div>
      </UserProfile>
    </>
  );
};

export default ProfileUser;
