import NewsList from "../NewsList/NewsList";
import * as newsService from "../../@types/NewsListService";
import { useEffect, useState } from "react";
import { Props } from "../../@types/news";
import { useNavigate } from "react-router-dom";
import "./NewsEdit.scss";

export default function NewsEdit() {
  let navigate = useNavigate();

  const [news, setNews] = useState<Props[]>([]);

  const loadNews = async () => {
    const res = await newsService.getNews();
    setNews(res.data);
  };

  const newsDelete = async (id: string) => {
    await newsService.deleteNewsId(id);
    loadNews();
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <>
      {news.map((item) => {
        return (
          <div key={item._id} className="containerNewsEdit">
            <NewsList newsList={item} />

            <div>
              <button onClick={() => navigate(`/news/update/${item._id}`)}>
                Editar
              </button>
              <button onClick={() => item._id && newsDelete(item._id)}>
                Deletar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
