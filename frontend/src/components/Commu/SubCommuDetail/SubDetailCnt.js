import styled from "styled-components";

const CntContainer = styled.div`
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

const SubDetailCnt = () => {
  return (
    <div>
      <CntContainer>
        {/* <!-- header: 상세 상단 --> */}
        <p class="cnt-desc">
          너무너무 잘 쉬다 왔어요~ 일요일에 가니 사람도 없고 완전 전세캠했습니다
          ㅎㅎ 캠지기님도 넘 친절하고 뷰도 가리는거 없이 좋았네요 사람이
          없기도했지만 한눈에봐도 사이트 간격이 넓은편입니다 또 놀러갈
          예정이에요 ㅎㅎㅎ
        </p>

        {/*  <!-- 컨텐츠:위치정보 --> */}
        <div class="cnt-local">
          <i class="fas fa-map-marker-alt"></i>
          <span class="local-txt">
            강화도산들애캠핑수영장 대형11번~27번 27번
          </span>
        </div>

        {/* 컨텐츠:이미지 */}
        <div class="cnt-img">
          <div class="medium">
            <img src="../img/medium4.jpeg" alt="커뮤니티" />
          </div>
          <div class="medium-half-container">
            <div class="medium-half">
              <img src="../img/small4.jpeg" alt="커뮤니티" />
            </div>
            <div class="medium-half">
              <img src="../img/small5.jpeg" alt="커뮤니티" />
            </div>
          </div>
        </div>
      </CntContainer>
    </div>
  );
};

export default SubDetailCnt;
