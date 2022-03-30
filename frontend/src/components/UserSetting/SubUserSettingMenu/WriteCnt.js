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

const Cnt = styled.div`
  border-top: 1px solid rgb(234, 238, 236);

  textarea {
    padding: 20px 0px;
    border: none;
    width: 100%;
    height: 520px;
    font-family: SpoqaHanSans;
    font-weight: 400;
    font-size: 10pt;
    outline: none;
    resize: none;
  }
`;

const PhotoContainer = styled.div`
  padding: 20px 0px 20px 20px;
  background: rgb(255, 255, 255);
`;

const PhotoBox = styled.div`
  margin-top: auto;
`;

const PhotoUpload = styled.div`
  margin-top: auto;
`;

const Photo = styled.label`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px solid rgb(212, 217, 214);
  border-radius: 8px;

  span {
    font-size: 17pt;
  }

  div {
    font-size: 10.5pt;
    color: #555;
    margin-top: 5px;
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
            <span className="material-icons-outlined">expand_more</span>
          </CntBtn>
          {/* <!-- 글쓰기 입력영역 --> */}
          <Cnt>
            <textarea
              height="100%"
              placeholder="이곳에 글을 작성해주세요.최소 10자 이상 입력해주세요."
              name="constents"
              maxlength="3000"
            ></textarea>
          </Cnt>
        </CntBox>

        {/* <!-- 이미지 업로드 --> */}
        <PhotoContainer>
          <PhotoBox>
            <PhotoUpload>
              {/* <!-- 이미지 업로드 --> */}
              <Photo for="upload-btn">
                <span className="material-icons">image</span>
                <div>0/10</div>
              </Photo>
            </PhotoUpload>
          </PhotoBox>
        </PhotoContainer>
      </CntContainer>
    </>
  );
};

export default WriteCnt;
