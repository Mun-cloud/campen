const CampBusinessPop = () => {
  return (
    <div className="pop business_pop">
      <div className="pop_header">
        <div className="pop_chev refund_chev">
          <i className="fas fa-chevron-left"></i>
        </div>
        <p className="pop_title">사업자 정보</p>
      </div>
      <div className="pop_main">
        <table className="pop_table">
          <tbody>
            <tr>
              <td className="pop_table_name">대표자명</td>
              <td>남현승</td>
            </tr>
            <tr>
              <td className="pop_table_name">상호명</td>
              <td>구봉산오토캠핑장 나인힐스</td>
            </tr>
            <tr>
              <td className="pop_table_name">사업자 주소</td>
              <td>
                경기 용인시 처인구 원삼면 보개원삼로1372번길 41 구봉산나인힐스
              </td>
            </tr>
            <tr>
              <td className="pop_table_name">전자우편 주소</td>
              <td>penury@naver.com</td>
            </tr>
            <tr>
              <td className="pop_table_name">사업자 등록 번호</td>
              <td>220-86-50466</td>
            </tr>
            <tr>
              <td className="pop_table_name">관광사업(야영장) 등록 번호</td>
              <td>제2015-000014호</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampBusinessPop;
