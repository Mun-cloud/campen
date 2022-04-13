/* global kakao */

import { useEffect } from "react";
import styled from "styled-components";
import CopyBtn from "../CopyBtn";

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

  #map {
    width: 100%;
    height: 120px;
    margin-top: 7px;
    border-radius: 15px;
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

const CampBasicInfo = ({ item }) => {
  // 주소 합치기
  let addr = "";
  if (item.addr1) {
    addr += item.addr1;
  }
  if (item.addr2) {
    addr += item.addr2;
  }

  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(item.mapY, item.mapX),
      level: 4,
    };

    let map = new window.kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(item.mapY, item.mapX);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    console.log("loading kakaomap");
  }, [item]);

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
              <td>{item.lctCl && item.lctCl.replaceAll(",", ", ")}</td>
            </tr>
            <tr>
              <td>대표번호</td>
              <td>
                {item.tel}
                <CopyBtn cls="camp_basic_btn" text="복사하기" copy={item.tel} />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                {addr}
                <CopyBtn cls="camp_basic_btn" text="복사하기" copy={addr} />
              </td>
            </tr>
          </tbody>
        </table>
        <div id="map"></div>
      </CampBox>
    </section>
  );
};

export default CampBasicInfo;
