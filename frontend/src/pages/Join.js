import BasicHeaderBar from "../components/BasicHeaderBar";
import styled from "styled-components";

import { useRef, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const JoinContainer = styled.div`
  padding: 40px 20px;
  height: 100%;
`;

const JoinHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Checkbox = styled.div`
  padding: 0 5px;
  input {
    margin: 0;
    margin-right: 13px;
    width: 15px;
    height: 15px;
  }

  > label {
    padding-bottom: 18px;
    border-bottom: 1px solid rgb(234, 238, 236);
  }

  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  .check_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 22px;
    margin-top: 14px;
    position: relative;
    z-index: 4;
  }

  .check_list i {
    color: rgba(19, 34, 28, 0.4);
    margin-right: 7px;
  }

  /* 버튼 색 변경 */
  .foot_btn.checked {
    background-color: rgb(67, 192, 131);
    color: white;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: rgb(234, 238, 236);
  color: rgb(133, 138, 136);
  font-weight: 700;
  font-size: 16px;
  border: none;
  position: absolute;
  bottom: 0;
  transition: background-color 0.1s ease-in;
`;

const Join = () => {
  const [allCheck, setAllCheck] = useState();

  const check1 = useRef();
  const check2 = useRef();
  const check3 = useRef();

  return (
    <Container>
      <BasicHeaderBar title="약관동의" />
      <JoinContainer>
        <JoinHeader>가입약관을 읽고 동의를 해주세요.</JoinHeader>
        <Checkbox className="check_box">
          <label>
            <input
              type="checkbox"
              id="check_all"
              onClick={() => {
                setAllCheck(true);
              }}
            />
            전체동의하기
          </label>
          <div className="check_list" id="term1">
            <label>
              <input
                ref={check1}
                onClick={() => {
                  console.log(check1.current.checked);
                }}
                type="checkbox"
                className="check_term"
              />
              서비스 이용약관 (필수)
            </label>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="check_list" id="term2">
            <label>
              <input ref={check2} type="checkbox" className="check_term" />
              개인정보 처리방침 (필수)
            </label>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="check_list" id="term3">
            <label>
              <input ref={check3} type="checkbox" className="check_term" />
              이벤트/마케팅 수신동의 (선택)
            </label>
            <i className="fas fa-chevron-right"></i>
          </div>
        </Checkbox>
      </JoinContainer>
      <Button class="foot_btn">다음</Button>
    </Container>
  );
};

export default Join;
