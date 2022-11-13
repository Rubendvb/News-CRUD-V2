import axios from "axios";
import { Props } from "./news";

const API = "http://localhost:3333";

export const getNews = async () => {
  return await axios.get<Props[]>(`${API}/news`);
};

export const createNews = async (news: Props) => {
  return await axios.post(`${API}/news`, news);
};

export const getNewsId = async (id: string) => {
  return await axios.get<Props>(`${API}/news/${id}`);
};

export const updateNewsId = async (id: string, news: Props) => {
  return await axios.put<Props>(`${API}/news/${id}`, news);
};

export const deleteNewsId = async (id: string) => {
  return await axios.delete<Props>(`${API}/news/${id}`);
};
