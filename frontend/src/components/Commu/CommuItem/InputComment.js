const InputComment = () => {
  return (
    <div className="cmt2-box">
      <form className="form-box">
        {/* <!-- 텍스트 업로드 --> */}
        <div className="textarea">
          <textarea
            placeholder="댓글을 입력해주세요."
            name="comment"
            className="comment"
            rows="1"
          ></textarea>
          <div color="primary80" className="submit-btn submit-btn2">
            <button type="submit">등록</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputComment;
