import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPhotoUpload = () => {
  const go = useNavigate();

  const onChange = async (e) => {
    console.log(e.eventTarget.value);
    const image = e.eventTarget.value.files;
    console.log(image);

    try {
      // 이미지 데이터 형식 처리
      const formdata = new FormData();
      formdata.append("photo", image);
      const config = {
        Headers: {
          "content-type": "multipart/form-data",
        },
      };
      // 이미지 데이터 전송
      const res = await axios.post(`/api/upload/simple`, formdata, config);
      console.log("res", res);
      // 멀티 이미지 각각을 데이터베이스에 저장
      const rr = await axios.put(`/api/member/photo`, {
        input: res.data.item,
      });
      console.log(rr);
      // alert("프로필 사진이 등록되었습니다..");
      // go("/usersetting");
    } catch (err) {
      alert(err.response.data.rtmsg);
    }
  };

  return (
    <label className="img-upload" htmlFor="upload-button">
      <div className="user-div">프로필 사진 변경</div>
      <input
        type="file"
        accept="image/jpg,impge/png,image/jpeg,image/gif"
        id="upload-button"
        onChange={onChange}
        style={{ display: "none" }}
      />
    </label>
  );
};

export default UserPhotoUpload;
