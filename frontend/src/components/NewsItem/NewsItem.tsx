import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Props } from "../../@types/news";

import * as newsService from "../../@types/NewsListService";

import "./NewsItem.scss";

import moment from "moment";

export default function NewsItem() {
  const initialState = {
    author: "",
    content: "",
    createdAt: "",
    updatedAt: "",
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
    const { author, content, createdAt, subtitle, title, image, updatedAt } =
      res.data;
    setNewsId({
      author,
      content,
      createdAt,
      subtitle,
      title,
      image,
      updatedAt,
    });
  };

  const formatDate = (date: any, update: any) => {
    moment.locale("pt-br");

    return `${moment(date).format("L")} - Atualizado há ${moment(update)
      .startOf("minute")
      .fromNow(true)}`;
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
        <span className="containerNewsItem__createdAt">
          {`${formatDate(newsId.createdAt, newsId.updatedAt)}`}
        </span>
      </div>
      <p className="containerNewsItem__text">{newsId.content}</p>

      <img className="containerNewsItem__img" src={newsId.image} alt="" />
    </div>
  );
}
