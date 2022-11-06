import axios from "axios";
import { Props } from "./news";

export const getNews = async () => {
  return await axios.get<Props[]>("http://localhost:3333/news");
};

export const getNewsId = async (id: string) => {
  return await axios.get<Props>(`http://localhost:3333/news/${id}`);
};
