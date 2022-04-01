import axios from "axios";

export const getNoticeList = async () => {
  try {
    return (await axios.get("/notice")).data;
  } catch (err) {
    console.error(err);
  }
};
