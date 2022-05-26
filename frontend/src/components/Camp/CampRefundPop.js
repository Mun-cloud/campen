import { useRef, useState } from "react";
import styled from "styled-components";

const RefundBox = styled.div`
  position: fixed;
  top: 0px;
  left: auto;
  right: auto;
  z-index: 2000;
  max-width: 530px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: ${(props) => props.theme.white};

  .pop_header {
    top: 0px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
  }

  .pop_chev {
    position: absolute;
    display: flex;
    align-items: center;
    left: 20px;
    cursor: pointer;
    font-size: 17px;
    padding: 10px;
  }

  .pop_title {
    font-size: 16px;
  }

  .pop_main {
    padding: 40px 20px;
  }

  .pop_small {
    padding-bottom: 8px;
    font-size: 12px;
    color: rgb(26, 29, 27);
  }
  /* 취소환불규정 팝업 */
  .refund_section {
    padding-top: 32px;
    font-size: 12px;
  }

  .refund_section_title {
    padding-bottom: 8px;
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
    font-size: 13px;
    font-weight: 700;
    color: ${(props) => props.theme.mainColor};
  }

  .refund_text_box {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
  }

  .refund_section_partition {
    display: flex;
    justify-content: space-between;
    padding: 8px 0px 4px;
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
  }

  .refund_section_partition > * {
    flex: 1 1 0%;
  }

  .refund_partition_right {
    display: flex;
    justify-content: space-between;
  }

  .refund_gay_text {
    color: ${(props) => props.theme.darkGray};
  }

  .refund_days {
    padding-bottom: 6px;
  }
`;

const CampRefundPop = () => {
  const refundPop = useRef();

  return (
    <RefundBox className="pop refund_pop" ref={refundPop}>
      <div className="pop_header">
        <div
          onClick={(props) => {
            console.log(props);
          }}
          className="pop_chev refund_chev"
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <p className="pop_title">취소환불규정</p>
      </div>
      <div className="pop_main">
        <div className="pop_small">구봉산오토캠핑장 나인힐스</div>
        <div className="pop_policy">취소환불규정</div>
        <div className="refund_section">
          <div className="refund_section_title">
            무통장입금 예약건 환불예정일
          </div>
          <div className="refund_text_box">
            <div>환불신청 후 7일</div>
          </div>
        </div>
        <div className="refund_section">
          <div className="refund_section_title">캠핑장자체 환불수수료</div>
          <div className="refund_text_box">
            <div>100% 환불 건만 적용</div>
            <div>1,000원</div>
          </div>
        </div>
        <div className="refund_section">
          <div className="refund_section_title">환불기준(평일)</div>
          <div className="refund_section_partition">
            <div>비성수기</div>
            <div className="refund_partition_right">
              <div className="refund_gay_text">
                <div className="refund_days">입실 당일</div>
                <div className="refund_days">1일전</div>
                <div className="refund_days">2일전</div>
                <div className="refund_days">3일전</div>
                <div className="refund_days">4일전</div>
                <div className="refund_days">5일전</div>
                <div className="refund_days">6일전</div>
                <div className="refund_days">7일 ~</div>
              </div>
              <div>
                <div className="refund_per">0%</div>
                <div className="refund_per">0%</div>
                <div className="refund_per">30%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">70%</div>
                <div className="refund_per">100%</div>
              </div>
            </div>
          </div>
          <div className="refund_section_partition">
            <div>성수기</div>
            <div className="refund_partition_right">
              <div className="refund_gay_text">
                <div className="refund_days">입실 당일</div>
                <div className="refund_days">1일전</div>
                <div className="refund_days">2일전</div>
                <div className="refund_days">3일전</div>
                <div className="refund_days">4일전</div>
                <div className="refund_days">5일전</div>
                <div className="refund_days">6일전</div>
                <div className="refund_days">7일 ~</div>
              </div>
              <div>
                <div className="refund_per">0%</div>
                <div className="refund_per">0%</div>
                <div className="refund_per">30%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">70%</div>
                <div className="refund_per">100%</div>
              </div>
            </div>
          </div>
          <div className="refund_section_partition">
            <div>극성수기</div>
            <div className="refund_partition_right">
              <div className="refund_gay_text">
                <div className="refund_days">입실 당일</div>
                <div className="refund_days">1일전</div>
                <div className="refund_days">2일전</div>
                <div className="refund_days">3일전</div>
                <div className="refund_days">4일전</div>
                <div className="refund_days">5일전</div>
                <div className="refund_days">6일전</div>
                <div className="refund_days">7일 ~</div>
              </div>
              <div>
                <div className="refund_per">0%</div>
                <div className="refund_per">0%</div>
                <div className="refund_per">30%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">70%</div>
                <div className="refund_per">100%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="refund_section">
          <div className="refund_section_title">환불기준(주말)</div>
          <div className="refund_section_partition">
            <div>비성수기</div>
            <div className="refund_partition_right">
              <div className="refund_gay_text">
                <div className="refund_days">입실 당일</div>
                <div className="refund_days">1일전</div>
                <div className="refund_days">2일전</div>
                <div className="refund_days">3일전</div>
                <div className="refund_days">4일전</div>
                <div className="refund_days">5일전</div>
                <div className="refund_days">6일전</div>
                <div className="refund_days">7일 ~</div>
              </div>
              <div>
                <div className="refund_per">0%</div>
                <div className="refund_per">0%</div>
                <div className="refund_per">30%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">70%</div>
                <div className="refund_per">100%</div>
              </div>
            </div>
          </div>
          <div className="refund_section_partition">
            <div>성수기</div>
            <div className="refund_partition_right">
              <div className="refund_gay_text">
                <div className="refund_days">입실 당일</div>
                <div className="refund_days">1일전</div>
                <div className="refund_days">2일전</div>
                <div className="refund_days">3일전</div>
                <div className="refund_days">4일전</div>
                <div className="refund_days">5일전</div>
                <div className="refund_days">6일전</div>
                <div className="refund_days">7일 ~</div>
              </div>
              <div>
                <div className="refund_per">0%</div>
                <div className="refund_per">0%</div>
                <div className="refund_per">30%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">70%</div>
                <div className="refund_per">100%</div>
              </div>
            </div>
          </div>
          <div className="refund_section_partition">
            <div>극성수기</div>
            <div className="refund_partition_right">
              <div className="refund_gay_text">
                <div className="refund_days">입실 당일</div>
                <div className="refund_days">1일전</div>
                <div className="refund_days">2일전</div>
                <div className="refund_days">3일전</div>
                <div className="refund_days">4일전</div>
                <div className="refund_days">5일전</div>
                <div className="refund_days">6일전</div>
                <div className="refund_days">7일 ~</div>
              </div>
              <div>
                <div className="refund_per">0%</div>
                <div className="refund_per">0%</div>
                <div className="refund_per">30%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">50%</div>
                <div className="refund_per">70%</div>
                <div className="refund_per">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RefundBox>
  );
};

export default CampRefundPop;
