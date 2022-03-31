import { Link } from "react-router-dom";
import styled from "styled-components";

const LogBox = styled.section`
  padding: 0;

  .log_header {
    padding: 20px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .box_title {
      display: flex;
      align-items: center;
      margin-bottom: 0;

      span {
        color: rgb(67, 192, 131);
        font-size: 12px;
        margin-left: 5px;
      }
    }

    .check_box {
      display: flex;
      align-items: center;

      #photo_log_text {
        font-size: 12px;
        line-height: 13px;
        margin-left: 3px;
      }
    }
  }

  /* 로그 리스트 */
  .log_box {
    border-top: 1px solid rgb(212, 217, 214);
    padding: 12px 20px;
  }

  .log_title {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
  }

  .fa-user-circle {
    font-size: 32px;
    padding-right: 5px;
  }

  .log_username {
    line-height: 16px;
    font-size: 13px;
    height: 16px;
  }

  .log_data {
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    color: rgb(90, 94, 91);
  }

  .log_chev {
    margin-left: auto;
    font-size: 20px;
    line-height: 32px;

    i {
      opacity: 0.4;
    }
  }

  .log_sample_box {
    display: flex;
    width: 100%;
  }

  .log_article {
    width: 100%;
    margin-right: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 22px;
    font-size: 13px;
    color: rgb(37, 40, 38);
  }

  .log_photo {
    img {
      border-radius: 5px;
      width: 76px;
      height: 76px;
    }
  }

  /* 로그 더보기 버튼 */
  .log_btn_box {
    padding: 20px;

    .camp_btn {
      margin: 0;
    }
  }
`;

const CampLog = () => {
  return (
    <LogBox id="zero_padding">
      <div className="log_header">
        <div className="box_title">
          캠핑로그
          <span>187</span>
        </div>
        <div className="check_box">
          <input type="checkbox" id="photo_log" />
          <span id="photo_log_text">포토 로그만 보기</span>
        </div>
      </div>
      <div>
        <div className="log_box">
          <div className="log_title">
            <div className="user_icon">
              <i className="far fa-user-circle"></i>
            </div>
            <div>
              <div className="log_username">캠퍼68688</div>
              <div className="log_data">
                <span className="log_view">12</span>·
                <span className="log_date">2022.01.25</span>
              </div>
            </div>
            <div className="log_chev">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <Link className="log_sample_box" to="/commu">
            <div className="log_article">
              샤워실 시설이 협소한걸 제외하고 모두 만족스러운 캠핑이었습니다.
              샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.샤워실 시설이 협소한걸 제외하고 모두 만족스러운
              캠핑이었습니다.
            </div>
            <div className="log_photo">
              <img src="https://via.placeholder.com/100x100" alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="log_btn_box">
        <button className="camp_btn" id="log_btn">
          캠핑로그 더보기
        </button>
      </div>
    </LogBox>
  );
};

export default CampLog;
