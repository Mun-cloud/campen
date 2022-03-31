import styled from "styled-components";
import axios from "axios";

const WriteSubmit = styled.button`
  max-width: 530px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  font-size: 11.5pt;
  background: rgb(234, 238, 236);
  color: rgb(133, 138, 136);
  font-weight: 700;
  font-size: 12pt;
  border: none;
  cursor: pointer;

  span {
    justify-content: center;
    align-items: center;
  }
`;

const postCommu = async (content, tab) => {
  try {
    const response = await axios.post("/content", { tab, content });
    console.log(response.data.item[0]);
  } catch (err) {
    console.error(err);
  }
};

const WriteButton = ({ text, tab }) => {
  return (
    <>
      {/* <!-- 하단 버튼 --> */}
      <WriteSubmit
        disabled={!(text.length > 10)}
        onClick={() => postCommu(text, tab)}
      >
        <span>최소 10자 이상 입력해주세요.</span>
      </WriteSubmit>
    </>
  );
};

export default WriteButton;
