import styled from "styled-components";

const CntImgBox = styled.div`
  width: 100%;

  .default {
    position: relative;
    width: 100%;
    height: 500px;
    margin-bottom: 5px;
  }

  .medium {
    position: relative;
    width: 100%;
    height: 250px;
    margin-bottom: 3px;
  }
  .medium-half-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    margin-bottom: 3px;
    overflow: hidden;
  }
  .medium-half {
    width: 49.7%;
    height: 150px;
  }

  .small-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    margin-bottom: 3px;
    overflow: hidden;
  }
  .small {
    width: 33%;
    height: 150px;
  }

  .default img,
  .medium img,
  .medium-half img,
  .small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .small-container div:nth-child(3) {
    position: relative;
  }
  .small span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 15pt;
    letter-spacing: 3pt;
  }
`;

const CntImg = ({ src }) => {
  return (
    <CntImgBox>
      <div className="default">
        <img src={src} alt="커뮤니티" />
      </div>
    </CntImgBox>
  );
};

export default CntImg;
