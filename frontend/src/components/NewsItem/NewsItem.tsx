import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Props } from "../../@types/news";

import * as newsService from "../../@types/NewsListService";

import "./NewsItem.scss";

export default function NewsItem() {
  const initialState = {
    author: "",
    content: "",
    createdAt: "",
    subtitle: "",
    title: "",
    image: "",
    _id: "",
  };

  const [newsId, setNewsId] = useState<Props>(initialState);

  const params = useParams();

  // console.log(params);

  const getNewsParamsId = async (id: string) => {
    const res = await newsService.getNewsId(id);
    // console.log(res.data);
    const { author, content, createdAt, subtitle, title, image } = res.data;
    setNewsId({ author, content, createdAt, subtitle, title, image });
  };

  useEffect(() => {
    if (params.id) {
      getNewsParamsId(params.id);
    }
  }, []);

  return (
    <div className="containerNewsItem">
      <h1 className="containerNewsItem__title">{newsId.title}</h1>
      <h2 className="containerNewsItem__subtitle">{newsId.subtitle}</h2>
      <div className="containerNewsItem__info">
        <span className="containerNewsItem__author">Por {newsId.author}</span>
        <span className="containerNewsItem__createdAt">{newsId.createdAt}</span>
      </div>
      <p className="containerNewsItem__text">{newsId.content}</p>

      <img src={newsId.image} alt="" />
    </div>
  );
}
