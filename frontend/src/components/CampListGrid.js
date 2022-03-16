const CampListGrid = ({ heart = "false" }) => {
  return (
    <div className="exhi_list_box">
      <div className="exhi_list_img">
        <img
          src={
            "https://campingagains3.s3.ap-northeast-2.amazonaws.com/small__ddef4c0bcd.jpeg"
          }
          alt="양양 오색산새소리캠핑장"
        />
        {heart === "true" && <i class="fas fa-heart exhi_heart"></i>}
      </div>
      <div className="exhi_list_info">
        <p className="exhi_list_gray">오토캠핑</p>
        <p className="exhi_list_title">양양 오색산새소리캠핑장</p>
        <div className="exhi_list_price">
          25,000<span>원 부터</span>
        </div>
        <p className="exhi_list_gray">강원 양양군</p>
      </div>
    </div>
  );
};

export default CampListGrid;
