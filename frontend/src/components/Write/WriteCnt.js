import { useEffect, useState } from "react";
import styled from "styled-components";

const CntContainer = styled.div`
  padding: 0px 20px 90px 20px;
  background: ${(props) => props.theme.white};
`;

const CntBox = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.lightGray};
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
  border-top: 1px solid ${(props) => props.theme.lightGray};

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
  background: ${(props) => props.theme.white};
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
  border: 1px solid ${(props) => props.theme.nomalGray};
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

const WriteCnt = ({
  cntText,
  cntTab,
  setImgs,
  prevText,
  prevTab,
  imgUploadHide,
}) => {
  const [files, setFiles] = useState([]);
  const [imgPreview, setImagPreview] = useState([]);
  const [text, setText] = useState("");
  const [tab, setTab] = useState("0");
  useEffect(() => {
    if (prevText) {
      setText(prevText);
      setTab(prevTab + "");
    }
  }, [prevText, prevTab]);

  // ?????? ????????? ??? ??????
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

  // 10??? ?????? ????????? ????????? ??????
  function preview() {
    if (files.length > 10) {
      alert("?????? ????????? ????????? ????????? ?????? 10??? ?????????.");
      setFiles((prev) => prev.slice(0, 10));
      setImagPreview((prev) => prev.slice(0, 10));
    }
  }

  useEffect(() => {
    preview();
    setImgs(files);
  }, [files]);

  function onPictureClick(e) {
    let i = parseInt(e.target.id);
    setFiles((prev) => prev.slice(0, i).concat(prev.slice(i + 1)));
    setImagPreview((prev) => prev.slice(0, i).concat(prev.slice(i + 1)));
  }

  return (
    <CntContainer>
      <CntBox>
        {/* <!-- ????????? ?????? ???????????? --> */}
        <CntBtn>
          <select
            value={tab}
            onChange={(e) => {
              setTab(e.currentTarget.value);
              cntTab(e.currentTarget.value);
            }}
          >
            <option value="0">????????????</option>
            <option value="1">????????????</option>
            <option value="2">????????????</option>
          </select>
        </CntBtn>
        {/* <!-- ????????? ???????????? --> */}
        <Cnt>
          <textarea
            className="text-box"
            height="100%"
            placeholder="????????? ?????? ??????????????????.?????? 10??? ?????? ??????????????????."
            name="constents"
            maxLength="3000"
            value={text}
            onChange={(e) => {
              setText(e.currentTarget.value);
              cntText(e.currentTarget.value);
            }}
          ></textarea>
        </Cnt>
      </CntBox>

      {/* <!-- ????????? ????????? --> */}
      {/* ????????? ???????????? ????????? ????????? */}
      {imgUploadHide ? null : (
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
                      onClick={onPictureClick}
                    />
                  ))}
              {/* <!-- ????????? ????????? --> */}
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
      )}
    </CntContainer>
  );
};

export default WriteCnt;
