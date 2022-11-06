import { useEffect, useState } from "react";
import * as newsService from "./NewsListService";

import { Props } from "../../@types/news";

export default function NewsList() {
  const [news, setNews] = useState<Props[]>([]);

  const loadNews = async () => {
    const res = await newsService.getNews();
    setNews(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <>
      {news.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <h2>{item.subtitle}</h2>
            <span>Autor {item.author} </span>
            <span>Criado {item.createdAt}</span>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
}
