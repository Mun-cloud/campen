import styled from "styled-components";

const MyProfile = styled.div`
  display: flex;
  padding: 20px 20px;
  align-items: center;
  background: rgb(255, 255, 255);

  .my-profile img {
    margin-right: 12px;
    width: 15%;
  }

  .my-user {
    margin-left: 5px;
  }

  .my-user-name {
    font-size: 14pt;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .my-user-intro {
    display: flex;
    align-items: center;
    color: #555;
    font-size: 11pt;
  }

  .my-user-intro span {
    font-size: 10pt;
    font-weight: 700;
    margin-left: 5px;
  }
`;

const MyLoginProfile = () => {
  return (
    <>
      {/*  <!-- 유저 마이 프로필 --> */}
      <a to="./user-setting.html">
        <MyProfile>
          <img src="./img/user-img.png" alt="상" />
          <div class="my-user">
            <h3 class="my-user-name">인생한번</h3>
            <p class="my-user-intro">
              나는 자연인을 꿈꿉니다.
              <span class="material-icons-outlined">arrow_forward_ios</span>
            </p>
          </div>
        </MyProfile>
      </a>
    </>
  );
};

export default MyLoginProfile;
