import styled from "styled-components";

const CntContainer = styled.div`
  padding: 0px 20px;
  background: rgb(255, 255, 255);
`;

const CntBox = styled.div`
  border-bottom: 1px solid rgb(234, 238, 236);
`;
const CntBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0px;
  width: 100%;
  height: 56px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  p {
    font-size: 11pt;
    font-weight: 400;
  }

  span {
    font-size: 17pt;
  }
`;

const WriteCnt = () => {
  return (
    <>
      {/* <!-- 컨텐츠 --> */}
      <CntContainer>
        <CntBox>
          {/* <!-- 글쓰기 주제 선택버튼 --> */}
          <CntBtn>
            <p>게시글의 주제를 선택해주세요.</p>
            <span class="material-icons-outlined">expand_more</span>
          </CntBtn>
          {/* <!-- 글쓰기 입력영역 --> */}
          <div class="cnt">
            <textarea
              height="100%"
              placeholder="이곳에 글을 작성해주세요.최소 10자 이상 입력해주세요."
              name="constents"
              maxlength="3000"
            ></textarea>
          </div>
        </CntBox>

        {/* <!-- 이미지 업로드 --> */}
        <div class="photo-container">
          <div class="photo-box">
            <div class="photo-upload">
              {/* <!-- 이미지 업로드 --> */}
              <label class="photo" for="upload-btn">
                <span class="material-icons">image</span>
                <div class="photo-count">0/10</div>
              </label>
            </div>
          </div>
        </div>
      </CntContainer>
    </>
  );
};

export default WriteCnt;
