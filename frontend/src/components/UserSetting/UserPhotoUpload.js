import axios from "axios";

const UserPhotoUpload = () => {
  const onChange = async (e) => {
    const image = e.target.files[0];

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
      // 멀티 이미지 각각을 데이터베이스에 저장
      await axios.put(`/api/member/photo`, {
        input: res.data.item,
      });
      alert("프로필 사진이 등록되었습니다.");
      window.location.reload();
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
        name="photo"
        id="upload-button"
        onChange={onChange}
        style={{ display: "none" }}
      />
    </label>
  );
};

export default UserPhotoUpload;
