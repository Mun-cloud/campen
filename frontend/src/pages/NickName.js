import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import BasicHeaderBar from "../components/BasicHeaderBar";
import SubSettingButton from "../components/UserSetting/SubUserSettingMenu/SubSettingButton";

const UserContainer = styled.div`
  margin: auto;
  height: 100vh;
  padding-bottom: 60px;
  background-color: rgb(241, 245, 243);

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

const Cnt = styled.div`
  padding: 20px;
  height: 100%;
  margin-bottom: -60px;
  background: rgb(255, 255, 255);

  .title {
    margin: 18px 0px 43px;

    div {
      font-size: 16pt;
      font-weight: 700;
      margin-bottom: 8px;
    }
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

const NickName = () => {
  const { item } = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const go = useNavigate();

  useEffect(() => {
    item.nickname && setValue(item.nickname);
  }, [item]);

  const onClick = async () => {
    try {
      const res = await axios.put("/member/nickname", { input: value });
    } catch (err) {
      alert(err.rtmsg);
    }
    go(-1);
  };

  return (
    <UserContainer>
      <BasicHeaderBar title="닉네임 변경" />
      <Cnt>
        <div className="title">
          <div>새로운 닉네임을</div>
          <div>입력해주세요.</div>
        </div>
        <input
          placeholder="변경할 닉네임을 입력해주세요."
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <hr style={{ border: " solid 0.5px rgb(211, 211, 211)" }} />
      </Cnt>

      <SubSettingButton fn={onClick} />
    </UserContainer>
  );
};

export default NickName;
