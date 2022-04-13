import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  padding: 14px 15px;
  font-size: 10pt;
  color: #666;
  font-weight: 400;
  border-bottom: 1px solid rgb(241, 245, 243);

  .cnt-like {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const SubDetailCntFooter = () => {
  return (
    <div>
      <Footer>
        {/*  <!-- 컨텐츠:좋아요--> */}
        <div class="cnt-footer">
          <div clsss="cnt-like" href="#">
            <a href="#">
              <i class="far fa-heart"></i>
              좋아요
            </a>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default SubDetailCntFooter;
