import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FootDiv = styled.footer`
  background-color: #f7faf8;
  color: rgba(0, 0, 0, 0.6);
  font-size: 10px;
  .container {
    width: 100%;
    margin: auto;
    padding: 15px;
  }

  .footer_logo {
    padding-top: 25px;
    margin-bottom: 15px;
    font-size: 20px;
  }

  .footer_clause {
    padding: 15px 0;
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  .footer_clause a {
    margin-right: 20px;
  }

  .cs {
    padding: 12px 0;
    font-size: 11px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  .cs span {
    display: block;
    margin-top: 6px;
  }

  .cs .cs_link {
    color: rgba(0, 0, 0, 0.7);
    font-weight: bold;
  }

  .cs .cs_link i {
    margin-left: 3px;
  }

  .business_info {
    height: 30px;
    overflow: hidden;
  }

  .business_info div {
    margin: 12px 0;
  }

  .business_info p {
    margin-bottom: 7px;
  }

  .business_info i {
    cursor: pointer;
    margin-left: 3px;
  }

  .footer_text {
    padding-top: 10px;
    padding-bottom: 100px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.3);
    line-height: 15px;
  }
`;

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footChev = useRef();
  const businessInfo = useRef();

  const onClick = () => {
    if (visible === false) {
      setVisible(true);
      footChev.current.classList = "fas fa-chevron-up";
      businessInfo.current.style.height = "134px";
    } else {
      setVisible(false);
      footChev.current.classList = "fas fa-chevron-down";
      businessInfo.current.style.height = "30px";
    }
  };

  return (
    <FootDiv>
      <div className="container">
        <div className="footer_logo">CAMPEN</div>
        <div className="footer_clause">
          <Link to="/term1">서비스 이용약관</Link>
          <Link to="/term2">개인정보 처리 방침</Link>
        </div>
        <div className="cs">
          <div className="cs_link">
            고객센터 <i className="fas fa-chevron-right"></i>
          </div>
          <span>
            평일 10:30~18:30
            <br />
          </span>
          <span>점심시간 13:00~14:00</span>
        </div>
        <div className="business_info" ref={businessInfo}>
          <div onClick={onClick}>
            (주)넥스트에디션 사업자정보{" "}
            <i className="fas fa-chevron-down" ref={footChev}></i>
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
    </FootDiv>
  );
};

export default Footer;
