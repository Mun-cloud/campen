import { useState } from "react";
import styled from "styled-components";
import CampPolicyPop from "./CampPolicyPop";

const PolicyBox = styled.section`
  .policy_anno {
    margin-bottom: 12px;
    font-weight: 700;
    color: rgb(67, 192, 131);
    font-size: 13px;
  }

  .policy_text {
    color: rgb(90, 94, 91);
    line-height: 22px;
  }
`;

const CampPolicy = () => {
  const [popvisible, setPopvisible] = useState(false);
  return (
    <PolicyBox className="camp_container" id="camp_policy">
      <div className="box_title">캠핑장 운영정책</div>
      <div className="policy_anno">
        행복한 캠핑을 위해서 필독 후 이용 부탁드립니다.
      </div>
      <p className="policy_text">
        캠핑장 운영정책에는 환불·양도양수·시설이용시간 등 캠핑장 이용에 관한
        가이드가 포함되어 있습니다.
      </p>
      <button
        className="camp_btn"
        id="policy_btn"
        onClick={() => setPopvisible(true)}
      >
        캠핑장 운영정책 더보기
      </button>
      {popvisible ? <CampPolicyPop /> : null}
    </PolicyBox>
  );
};

export default CampPolicy;
