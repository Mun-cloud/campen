import styled from "styled-components";

const 

const WriteCnt = () => {
  return (
    <>
      {/* <!-- 컨텐츠 --> */}
      <div class="cnt-container">
        <div class="cnt-box">
          {/* <!-- 글쓰기 주제 선택버튼 --> */}
          <button class="cnt-button">
            <p>게시글의 주제를 선택해주세요.</p>
            <span class="material-icons-outlined">expand_more</span>
          </button>
          {/* <!-- 글쓰기 입력영역 --> */}
          <div class="cnt">
            <textarea
              height="100%"
              placeholder="이곳에 글을 작성해주세요.최소 10자 이상 입력해주세요."
              name="constents"
              maxlength="3000"
            ></textarea>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default WriteCnt;
