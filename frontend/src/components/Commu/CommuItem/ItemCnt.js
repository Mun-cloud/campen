import styled from "styled-components";

const CntContainer = styled.div`
  .cnt-box-txt {
    padding: 13px;
    line-height: 24px;
  }

  .cnt-Q::before {
    margin-right: 2px;
    content: "Q.";
    color: rgb(67, 192, 131);
    font-size: 14pt;
    font-weight: 500;
  }

  .cnt-desc,
  .cnt-Q {
    padding-top: 10px;
    overflow: hidden;
    white-space: normal;
    text-align: left;
    font-size: 10pt;
    color: #333;
  }

  /* 컨텐츠:이미지 */
  .cnt-img img {
    display: block;
    width: 100%;
    height: auto;
    padding-bottom: 5px;
  }

  /* 위치정보 */
  .cnt-local {
    display: flex;
    padding-top: 10px;
    font-size: 9pt;
    color: #666;
    font-weight: 400;
    align-items: center;
  }
  .local-txt {
    margin-top: 2px;
    margin-left: 5px;
  }
`;

const ItemCnt = ({ content }) => {
  return !content ? (
    "Loading..."
  ) : (
    <div>
      <CntContainer>
        {/* <!-- header: 상세 상단 --> */}
        <div className="cnt-box-txt">
          <p className="cnt-desc">{content.content}</p>

          {/*  <!-- 컨텐츠:위치정보 --> */}
          <div className="cnt-local">
            <i className="fas fa-map-marker-alt"></i>
            <span className="local-txt">{content.camp_id}</span>
          </div>
        </div>

        {/* 컨텐츠:이미지 */}

        <div className="cnt-img">
          <div className="medium">
            <img
              src={require("../../../assets/img/medium4.jpeg")}
              alt="커뮤니티"
            />
          </div>
          <div className="medium-half-container">
            <div className="medium-half">
              <img
                src={require("../../../assets/img/small4.jpeg")}
                alt="커뮤니티"
              />
            </div>
            <div className="medium-half">
              <img
                src={require("../../../assets/img/small5.jpeg")}
                alt="커뮤니티"
              />
            </div>
          </div>
        </div>
      </CntContainer>
    </div>
  );
};

export default ItemCnt;
