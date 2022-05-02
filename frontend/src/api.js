import axios from "axios";

// 전체 notice값 GET
export const getNoticeList = async () => {
  try {
    return (await axios.get("/notice")).data;
  } catch (err) {
    alert(err.response.data.rtmsg);
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
    alert(err.response.data.rtmsg);
  }
};

// 전체 기획전 리스트 가져오기
export const getExhibition = async () => {
  try {
    return (await axios.get("/exhi")).data.item;
  } catch (err) {
    alert(err.response.data.rtmsg);
  }
};

// 기획전에 해당하는 CAMP 데이터 받기
export const getExhibitionCamp = async (id) => {
  try {
    return (await axios.get(`/exhi/${id}`)).data.item;
  } catch (err) {
    alert(err.response.data.rtmsg);
  }
};

// index페이지 photo 5개만 로딩
export const getIndexCampCut = async () => {
  try {
    return (await axios.get(`/content/photo`, { params: { query: 5 } })).data
      .item;
  } catch (err) {
    alert(err.response.data.rtmsg);
  }
};

// index페이지 log 5개만 로딩
export const getIndexCampLog = async () => {
  try {
    return (await axios.get(`/content/log`, { params: { query: 5 } })).data
      .item;
  } catch (err) {
    alert(err.response.data.rtmsg);
  }
};

// 게시글 아이디 값으로 댓글 로딩
export const getComments = async (id) => {
  try {
    return (await axios.get(`/comments/contents/${id}`)).data.item;
  } catch (err) {
    alert(err.response.data.rtmsg);
  }
};

// 좋아요 수 로딩
export const getLikes = async (id) => {
  try {
    return (await axios.get(`/content_like/${id}`)).data;
  } catch (err) {
    alert(err.response.data.rtmsg);
  }
};
