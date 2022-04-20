import { useEffect, useState } from "react";
import styled from "styled-components";

const CntContainer = styled.div`
  padding: 0px 20px 90px 20px;
  background: rgb(255, 255, 255);
`;

const CntBox = styled.div`
  border-bottom: 1px solid rgb(234, 238, 236);
  height: 65vh;
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
  padding: 20px;
  padding-bottom: 60px;
  background: rgb(255, 255, 255);
`;

const PhotoBox = styled.div`
  margin-top: auto;
`;

const PhotoUpload = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
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

const PreviewImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const WriteCnt = ({ cntText, cntTab }) => {
  const [files, setFiles] = useState([]);
  const [imgPreview, setImagPreview] = useState([]);

  function onChange(e) {
    const fileArr = e.target.files;

    if (fileArr.length > 0) {
      for (let i = 0; i < fileArr.length; i++) {
        let file = fileArr[i];
        const imageUrl = URL.createObjectURL(file);
        setFiles((prev) => prev.concat(file));
        setImagPreview((prev) => prev.concat(imageUrl));
      }
    }
  }

  function preview() {
    console.log(files);
    console.log(imgPreview);
    if (files.length > 10) {
      alert("최대 업로드 가능한 이미지 수는 10개 입니다.");
      setFiles((prev) => prev.slice(0, 10));
      setImagPreview((prev) => prev.slice(0, 10));
    }
  }

  useEffect(preview, [imgPreview]);

  function onPictuerClick(e) {
    let i = e.target.id;
    console.log(i);
    setFiles((prev) => prev.slice(0, i).concat(prev.slice(i + 1)));
    setImagPreview((prev) => prev.slice(0, i).concat(prev.slice(i + 1)));
  }

  return (
    <CntContainer>
      <CntBox>
        {/* <!-- 글쓰기 주제 선택버튼 --> */}
        <CntBtn>
          <select
            onChange={(e) => {
              cntTab(e.currentTarget.value);
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
              cntText(e.currentTarget.value);
            }}
          ></textarea>
        </Cnt>
      </CntBox>

      {/* <!-- 이미지 업로드 --> */}
      <PhotoContainer>
        <PhotoBox>
          <PhotoUpload>
            {imgPreview.length === 0
              ? null
              : imgPreview.map((v, i) => (
                  <PreviewImg
                    src={v}
                    alt={v}
                    key={v}
                    id={i}
                    onClick={onPictuerClick}
                  />
                ))}
            {/* <!-- 이미지 업로드 --> */}
            {imgPreview.length < 10 ? (
              <Photo htmlFor="upload-btn">
                <input
                  type="file"
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  id="upload-btn"
                  multiple
                  onChange={onChange}
                  style={{ display: "none" }}
                />
                <span className="material-icons">image</span>
                <div>{imgPreview.length}/10</div>
              </Photo>
            ) : null}
          </PhotoUpload>
        </PhotoBox>
      </PhotoContainer>
    </CntContainer>
  );
};

export default WriteCnt;
