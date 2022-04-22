import axios from "axios";

// 전체 notice값 GET
export const getNoticeList = async () => {
  try {
    return (await axios.get("/notice")).data;
  } catch (err) {
    console.error(err);
  }
};

// 고캠핑 API의 ID값에 따른 이미지 URL 받아오기
export const getImageList = async (contentId) => {
  try {
    const APIurl =
      "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/imageList";
    const KEY =
      "5APlXd7ZkPeuONbcZe2isYf2o238wB9owyYEmdkJEV7AeGwMGLtF2cB2ku18d/iA5dcfs9UX/wA+qck++FPT3A==";

    const urlParams = {
      params: {
        ServiceKey: KEY,
        MobileOS: "ETC",
        MobileApp: "AppTest",
        contentId,
      },
    };
    return (await axios.get(APIurl, urlParams)).data.response.body;
  } catch (err) {
    console.error(err);
  }
};

// 전체 기획전 리스트 가져오기
export const getExhibition = async () => {
  try {
    return (await axios.get("/exhi")).data.item;
  } catch (err) {
    console.error(err);
  }
};

// 기획전에 해당하는 CAMP 데이터 받기
export const getExhibitionCamp = async (id) => {
  try {
    return (await axios.get(`/exhi/${id}`)).data.item;
  } catch (err) {
    console.error(err);
  }
};

// index페이지 photo 5개만 로딩
export const getIndexCampCut = async () => {
  try {
    return (await axios.get(`/content/photo`, { params: { query: 5 } })).data
      .item;
  } catch (err) {
    console.error(err);
  }
};

// index페이지 log 5개만 로딩
export const getIndexCampLog = async () => {
  try {
    return (await axios.get(`/content/log`, { params: { query: 5 } })).data
      .item;
  } catch (err) {
    console.error(err);
  }
};
