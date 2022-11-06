import axios from "axios";

export const getNews = async () => {
  return await axios.get("http://localhost:3333/news");
};
