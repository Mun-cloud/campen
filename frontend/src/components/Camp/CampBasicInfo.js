import styled from "styled-components";

const CampBox = styled.div`
  .box_title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  table {
    width: 100%;
    font-size: 14px;
  }

  tr {
    height: 28px;
  }

  td:first-child {
    color: rgb(67, 192, 131);
  }

  td {
    position: relative;
  }

  img {
    width: 100%;
    margin-top: 7px;
  }

  .camp_basic_btn {
    min-width: 53px;
    width: 56px;
    height: 25px;
    margin: 0 0 0 auto;
    font-size: 11px;
    color: #fff;
    background-color: rgb(67, 192, 131);
    border: none;
    font-weight: 700;
    border-radius: 4px;
    position: absolute;
    right: 0;
    bottom: 3px;
  }
`;

const CampBasicInfo = () => {
  return (
    <section>
      <CampBox id="basic_info">
        <div className="box_title">기본 정보</div>
        <table>
          <tbody>
            <tr>
              <td>캠핑 형태</td>
              <td>오토캠핑, 글램핑, 펜션</td>
            </tr>
            <tr>
              <td>환경</td>
              <td>산</td>
            </tr>
            <tr>
              <td>대표번호</td>
              <td>
                050713448823
                <button className="camp_basic_btn">복사하기</button>
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                경기 용인시 처인구 원삼면 보개원삼로1372번길 41
                <button className="camp_basic_btn">연락하기</button>
              </td>
            </tr>
          </tbody>
        </table>
        <img src="https://via.placeholder.com/490x120" alt="" />
      </CampBox>
    </section>
  );
};

export default CampBasicInfo;
