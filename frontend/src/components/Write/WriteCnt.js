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

  select {
    margin: 0 auto;
    width: 470px;
    padding: 10px 5px;
    border-width: 0;
    cursor: pointer;
    outline: none;
    font-weight: 500;
    font-size: 14px;
  }
`;

const Cnt = styled.div`
  border-top: 1px solid rgb(234, 238, 236);

  textarea {
    padding: 20px 0px;
    border: none;
    width: 100%;
    height: 490px;
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

const WriteCnt = ({ textCnt, getTab }) => {
  return (
    <>
      {/* <!-- 컨텐츠 --> */}
      <CntContainer>
        <CntBox>
          {/* <!-- 글쓰기 주제 선택버튼 --> */}
          <CntBtn>
            <select
              onChange={(e) => {
                getTab(e.currentTarget.value);
              }}
            >
              <option value="0">캠핑한컷</option>
              <option value="1">캠핑후기</option>
              <option value="2">궁금해요</option>
            </select>
          </CntBtn>
          {/* <!-- 글쓰기 입력영역 --> */}
          <Cnt>
            <textarea
              className="text-box"
              height="100%"
              placeholder="이곳에 글을 작성해주세요.최소 10자 이상 입력해주세요."
              name="constents"
              maxLength="3000"
              onChange={(e) => {
                textCnt(e.currentTarget.value);
              }}
            ></textarea>
          </Cnt>
        </CntBox>

        {/* <!-- 이미지 업로드 --> */}
        <PhotoContainer>
          <PhotoBox>
            <PhotoUpload>
              {/* <!-- 이미지 업로드 --> */}
              <Photo htmlFor="upload-btn">
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
