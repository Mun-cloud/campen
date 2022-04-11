import styled from "styled-components";

const ListBox = styled.div`
  cursor: pointer;
  margin-top: 12px;
  margin-bottom: 10;
  width: calc(50% - 5px);
  font-size: 12px;
  line-height: 18px;

  .exhi_list_img {
    position: relative;
    padding-top: 100%;
  }

  .exhi_list_img img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  .exhi_list_info {
    margin-top: 8px;
    /* position: relative; */
  }

  .exhi_list_gray {
    color: rgb(118, 122, 120);
    margin-bottom: 4px;
  }

  .exhi_list_title {
    font-size: 13px;
  }

  .exhi_list_price {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
  }

  .exhi_list_price span {
    padding-left: 2px;
    font-size: 12px;
    font-weight: 400;
  }
`;

const CampListGrid = ({ item, heart = "false" }) => {
  return (
    <ListBox>
      <div className="exhi_list_img">
        <img src={item.campPhoto} alt={item.name} />
        {heart === "true" && <i class="fas fa-heart exhi_heart"></i>}
      </div>
      <div className="exhi_list_info">
        <p className="exhi_list_gray">
          {item.lctCl && item.lctCl.replaceAll(",", ", ")}
        </p>
        <p className="exhi_list_title">{item.name}</p>
        <p className="exhi_list_gray">{item.lineIntro}</p>
      </div>
    </ListBox>
  );
};

export default CampListGrid;
