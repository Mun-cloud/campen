import styled from "styled-components";

const CntFooter = styled.div`
  display: flex;
  font-size: 9pt;
  color: rgb(159, 165, 162);
  font-weight: 400;

  .cnt-like {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cnt-comment {
    display: flex;
    align-items: center;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const ProfileCntFooter = () => {
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
        <div className="cnt-comment">
          <a href="#">
            <i className="far fa-comment"></i>
            댓글쓰기
          </a>
        </div>
      </CntFooter>
    </>
  );
};

export default ProfileCntFooter;
