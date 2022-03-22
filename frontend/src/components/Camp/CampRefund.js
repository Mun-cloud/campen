import styled from "styled-components";
import CampRefundPop from "./CampRefundPop";

const RefundBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(234, 238, 236);
  cursor: pointer;

  .last_section:last-child {
    border-bottom: none;
  }

  .section_title_title {
    font-size: 18px;
    font-weight: 700;
  }

  .section_title_sub {
    font-weight: 500;
    color: rgb(90, 94, 91);
    padding-top: 8px;
    font-size: 13px;
  }

  .section_chev {
    font-size: 15px;
  }
`;

const CampRefund = () => {
  return (
    <section className="no_margin" id="zero_padding">
      <CampRefundPop />
      <RefundBox className="last_section" id="refund_btn">
        <div className="section_title">
          <div className="section_title_title">취소환불규정</div>
          <div className="section_title_sub">환불기준(평일/주말)</div>
        </div>
        <div className="section_chev">
          <i className="fas fa-chevron-right"></i>
        </div>
      </RefundBox>
    </section>
  );
};

export default CampRefund;
