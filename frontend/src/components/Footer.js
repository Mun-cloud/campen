const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_logo">CAMPEN</div>
        <div className="footer_clause">
          <a href="#">서비스 이용약관</a>
          <a href="#">개인정보 처리 방침</a>
        </div>
        <div className="cs">
          <a href="#" className="cs_link">
            고객센터 <i className="fas fa-chevron-right"></i>
          </a>
          <br />
          <span>
            평일 10:30~18:30
            <br />
          </span>
          <span>점심시간 13:00~14:00</span>
        </div>
        <div className="business_info">
          <div>
            (주)넥스트에디션 사업자정보 <i className="fas fa-chevron-down"></i>
          </div>

          <p>상호 : (주)넥스트에디션</p>
          <p>대표이사 : 김동수</p>
          <p>사업자등록번호 : 669-88-01204</p>
          <p>통신판매업신고 : 2020-서울서초-2172호</p>
          <p>주소 : 서울시 서초구 바우뫼로 213길 세안빌딩 2층</p>
          <p>기업 제휴 문의 : contact@nextedition.co.kr</p>
          <p>마케팅 제휴 문의 : camfit@nextedition.co.kr</p>
        </div>
        <p className="footer_text">
          (주)넥스트에디션(캠핏)은 통신판매중개자이며, 통신판매의 당사자가
          아닙니다. 따라서, (주)넥스트에디션(캠핏)은 상품의 예약, 이용 및 환불
          등과 관련한 책임을 지지 않습니다.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
