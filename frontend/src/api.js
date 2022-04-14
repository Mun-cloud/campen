import axios from "axios";

export const getNoticeList = async () => {
  try {
    return (await axios.get("/notice")).data;
  } catch (err) {
    console.error(err);
  }
};

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

export const getExhibition = async () => {
  try {
    return (await axios.get("/exhi")).data.item;
  } catch (err) {
    console.error(err);
  }
};

export const getExhibitionCamp = async (id) => {
  try {
    return (await axios.get(`/exhi/${id}`)).data.item;
  } catch (err) {
    console.error(err);
  }
};
