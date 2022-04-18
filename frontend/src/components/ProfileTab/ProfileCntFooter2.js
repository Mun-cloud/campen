import styled from "styled-components";

const CntFooter = styled.div`
  display: flex;
  font-size: 9pt;
  color: rgb(159, 165, 162);
  font-weight: 400;
  padding-bottom: 20px;

  .cnt-like {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const ProfileCntFooter2 = () => {
  return (
    <>
      {/* <!-- 컨텐츠:좋아요,댓글 --> */}
      <CntFooter>
        <div className="cnt-like">
          <a href="#">
            <i className="far fa-heart"></i>
            좋아요
          </a>
        </div>
      </CntFooter>
    </>
  );
};

export default ProfileCntFooter2;
