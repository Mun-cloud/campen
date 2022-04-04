import styled from "styled-components";
import axios from "axios";

const WriteSubmit = styled.button`
  max-width: 530px;
  bottom: 0px;
  width: 100%;
  height: 70px;
  font-size: 11.5pt;
  font-weight: 700;
  font-size: 12pt;
  border: none;
  cursor: pointer;
  background-color: rgb(234, 238, 236);
  color: rgb(133, 138, 136);

  transition: background-color 0.3s ease-in-out;

  &.active {
    background-color: #43c083;
    color: rgb(255, 255, 255);
  }

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
<<<<<<< HEAD
      {/* <div > */}
      <WriteSubmit
        className={text.length > 10 ? "active" : ""}
        disabled={!(text.length > 10)}
        onClick={() => postCommu(text, tab)}
      >
        10자 이상 입력해주세요.
      </WriteSubmit>

      {/* {text.length > 10 && (
=======
      <div disabled={!(text.length > 10)} onClick={() => postCommu(text, tab)}>
        {text.length < 10 && (
          <WriteSubmit style={{ backgroundColor: "rgb(234, 238, 236)" }}>
            <span style={{ color: "rgb(133, 138, 136)" }}>
              최소 10자 이상 입력해주세요
            </span>
          </WriteSubmit>
        )}

        {text.length >= 10 && (
<<<<<<< Updated upstream
=======
>>>>>>> 060483037325bae68ded0be5cdee4d2657874ad9
>>>>>>> Stashed changes
          <WriteSubmit style={{ backgroundColor: "#43C083" }}>
            <span style={{ color: "rgb(255, 255, 255)" }}>작성 완료</span>
          </WriteSubmit>
        )} */}
      {/* </div> */}
    </>
  );
};

export default WriteButton;
