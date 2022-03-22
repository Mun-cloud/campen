import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PoliciPop = styled.div`
  position: fixed;
  top: 0px;
  left: auto;
  right: auto;
  z-index: 2000;
  max-width: 530px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgb(255, 255, 255);

  .pop_header {
    top: 0px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 100%;
    border-bottom: 1px solid rgb(234, 238, 236);
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

  .pop_policy {
    font-size: 20px;
    font-weight: 700;
  }

  .pop_text {
    padding-top: 32px;
    white-space: pre-line;
    word-break: break-all;
    font-size: 14px;
    line-height: 20px;
  }
`;

const CampPolicyPop = () => {
  const pop = useRef();

  useEffect(() => {
    pop.current.hidden = false;
  }, []);

  return (
    <PoliciPop ref={pop}>
      <div className="pop_header">
        <div
          className="pop_chev policy_chev"
          onClick={(e) => {
            pop.current.hidden = true;
          }}
        >
          <i className="fas fa-chevron-left policy_btn_chev"></i>
        </div>
        <p className="pop_title">캠핑장 운영정책</p>
      </div>
      <div className="pop_main">
        <div className="pop_small">포천 꿈에그린캠핑장</div>
        <div className="pop_policy">캠핑장 운영정책</div>
        <div className="pop_text">
          ♬♪♪ 캠핑장내 준수사항
          <br />
          ▶ 캠핑장은 다수가 이용하는 공중시설입니다.
          <br />
          기본예절과 양보하는 마음으로 모두가 만족하는 캠핑장을 만들어
          <br />
          주세요. ▶ 10시 이후에는 차량통행을 자제해 주시기 바랍니다. 배수를
          <br />
          위해 파쇄석이 깔려있기 때문에 심야에 차량이동시 소음이 생깁니다.
          <br />
          방문차량은 10시 이전에 캠핑장 밖으로 이동조치 하시고 심야통행을
          <br />
          자제하여 주변 텐트에 방해가되지 않도록 해주세요.
          <br />
          ▶ 옆텐트에 소음으로 피해가 되지않게 10시 이후에는 캠퍼님들 자체적으로
          <br />
          시끄럽지 않게 주의 부탁드립니다. 캠핑 기본예절이므로 알아서
          <br />
          잘해주시리라 믿습니다.
          <br />
          또한 10시 이후엔 순찰을 통해 소음이 심한
          <br />
          텐트 주의를 살펴보겠습니다.
          <br />
          ▶ 캠핑장내 나무들은 아직 뿌리가 단단히
          <br />
          자리잡지 못했습니다.
          <br />
          -&gt; 해먹을 사용하기엔 약하므로 반드시
          <br />
          해먹용 스텐드를 사용하시기 바랍니다.
          <br />
          ▶ 화로대 없이 장작이나 숯<br />
          사용을 금지합니다.
          <br />
          -&gt; 파쇄석 사이로 재가 떨어져 악취와 불괘감을
          <br />
          줄 수 있습니다. ▶ 전기는 500W 미만의 전기담요 및 전등만 사용가능
          <br />
          합니다. -&gt; 고압전열기구, 전기히터 등은 사용불가 합니다.
          <br />
          ▶ 애완견 출입금지입니다.
          <br />
          ▶ 캠핑장 내에서 풍등, 폭죽 놀이 등 위험한
          <br />
          놀이기구 사용을 금지합니다.
          <br />
          예약에 관한 문의는 010-5367-8584 로<br />
          해주세요 - 예약 접수후24시간 안에 입금이 안될시 예약접수가 자동
          <br />
          취소 됩니다. - 하나..입금 후 예약확인은 지정예약하신
          <br />
          오토캠핑번호가 빨간색으로 표시가 되시면 예약이 완료되신겁니다..
          <br />
          - 둘..개인예약번호를 기억하시고 실시간 예약공간 오른쪽 상단 예약확인
          <br />
          클릭후 확인 해주세요 (성함.핸드폰번호확인가능하십니다)로도
          <br />
          확인가능하십니다)
        </div>
        <br />
      </div>
    </PoliciPop>
  );
};

export default CampPolicyPop;
