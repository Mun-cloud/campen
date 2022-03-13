import styled from "styled-components";
import SubDetailHeader from "./SubCommuDetail/SubDetailHeader";
import SubDetailProfile from "./SubCommuDetail/SubDetailProfile";
import SubDetailCnt from "./SubCommuDetail/SubDetailCnt";
import SubDetailCntFooter from "./SubCommuDetail/SubDetailCntFooter";

const CommuDetail = () => {
  return (
    <div>
      <SubDetailHeader />
      <SubDetailProfile />
      <SubDetailCnt />
      <SubDetailCntFooter />
    </div>
  );
};

export default CommuDetail;
