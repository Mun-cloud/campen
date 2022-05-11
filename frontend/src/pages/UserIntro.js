import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import SubSettingButton from "../components/UserSetting/SubUserSettingMenu/SubSettingButton";

const UserContainer = styled.div`
  margin: auto;
  height: 100vh;
  padding-bottom: 60px;
  background-color: rgb(241, 245, 243);
`;

const UserHeader = styled.div`
  top: 0px;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 52px;
  max-width: 530px;
  width: 100%;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(241, 245, 243);
  color: #333;

  span {
    width: 50px;
    margin-left: 20px;
    font-size: 13pt;
    font-weight: 700;
    cursor: pointer;
  }

  p {
    margin: 0px auto;
    padding-right: 70px;
    font-size: 12.5pt;
  }
`;

const SettingCnt = styled.div`
  padding: 20px;
  height: 100%;
  margin-bottom: -60px;
  background: rgb(255, 255, 255);

  .cnt-text {
    margin: 18px 0px 43px;
  }

  .cnt-text div {
    font-size: 16pt;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 0px 0px 0px 5px;
    color: rgb(5, 6, 6);
    font-family: SpoqaHanSans;
    font-weight: 400;
    font-size: 12pt;
    border: none;
    outline: none;
  }
`;

const UserIntro = () => {
  const { item } = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const go = useNavigate();
  useEffect(() => {
    item.intro && setValue(item.intro);
  }, [item]);

  const onClick = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_BACK}/member/intro`, {
        input: value,
      });
    } catch (err) {
      alert(err.response.data.rtmsg);
    }
    go(-1);
  };

  return (
    <UserContainer>
      <UserHeader>
        <div
          onClick={() => {
            go(-1);
          }}
        >
          <span className="material-icons-outlined">arrow_back_ios</span>
        </div>
        <p>한 줄 소개 설정</p>
      </UserHeader>

      <SettingCnt>
        <div className="cnt-text">
          <div>캠퍼님을 소개할 수 있는</div>
          <div>소개글을 입력해주세요.</div>
        </div>
        <input
          value={value}
          placeholder="변경할 닉네임을 입력해주세요."
          type="text"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <hr style={{ border: "solid 0.5px rgb(211, 211, 211)" }} />
      </SettingCnt>
      <SubSettingButton fn={onClick} />
    </UserContainer>
  );
};

export default UserIntro;
