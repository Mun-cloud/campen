import styled from "styled-components";

const CntBox = styled.div`
  background: rgb(255, 255, 255);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .cnt-box-txt {
    padding: 13px;
    line-height: 24px;
  }

  .cnt-category {
    display: inline-block;
    margin-top: 8px;
    padding: 0px 5px;
    margin-bottom: 15px;
    background: rgb(234, 238, 236);
    border-radius: 3px;
    color: #555;
    font-weight: 500;
    font-size: 9pt;
  }

  .cnt-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .cnt-user {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cnt-user-img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid rgb(201, 207, 204);
    object-fit: cover;
  }

  .cnt-user-name {
    display: flex;
    font-size: 11pt;
    font-weight: 500;
    color: #333;
  }

  .cnt-time {
    color: #999;
    font-weight: 400;
    font-size: 9pt;
  }
`;

const SubDetailProfile = () => {
  return (
    <div>
      <CntBox>
        {/* 프로필, 컨텐츠 업로드 시간 */}
        <div class="cnt-category">캠핑후기</div>
        <ul class="cnt-profile">
          <a href="../profile1-2.html">
            <li class="cnt-user">
              <img
                class="cnt-user-img"
                src="../img/user-img.png"
                alt="캠퍼1103"
              />
              <span class="cnt-user-name">캠퍼1103</span>
            </li>
          </a>
          <li class="cnt-time">40분 전</li>
        </ul>
      </CntBox>
    </div>
  );
};

export default SubDetailProfile;
