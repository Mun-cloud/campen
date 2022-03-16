const CampBasicInfo = () => {
  return (
    <section className="camp_container">
      <div className="camp_box" id="basic_info">
        <div className="box_title">기본 정보</div>
        <table>
          <tr>
            <td>캠핑 형태</td>
            <td>오토캠핑, 글램핑, 펜션</td>
          </tr>
          <tr>
            <td>환경</td>
            <td>산</td>
          </tr>
          <tr>
            <td>대표번호</td>
            <td>
              050713448823
              <button className="copy_btn camp_basic_btn">복사하기</button>
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              경기 용인시 처니구 원삼면 보개원삼로1372번길 41
              <button className="call_btn camp_basic_btn">연락하기</button>
            </td>
          </tr>
        </table>
        <img src="https://via.placeholder.com/490x120" alt="" />
      </div>
    </section>
  );
};

export default CampBasicInfo;
