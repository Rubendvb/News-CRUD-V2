import { useEffect, useState } from "react";
import * as newsService from "./@types/NewsListService";

import "./scss/App.scss";

import { Props } from "./@types/news";
import NewsList from "./components/NewsList/NewsList";

function App() {
  const [news, setNews] = useState<Props[]>([]);

  const loadNews = async () => {
    const res = await newsService.getNews();
    setNews(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  let newsEmphasis = news
    .map((itemList) => {
      return (
        <div className="containerEmphasis__news" key={itemList._id}>
          <NewsList key={itemList._id} newsList={itemList} />
        </div>
      );
    })
    .slice(0, 3);

  let newsList = news
    .map((item) => {
      return (
        <div>
          <NewsList key={item._id} newsList={item} />
        </div>
      );
    })
    .slice(3);

  return (
    <>
      <div className="containerEmphasis">{newsEmphasis}</div>
      <div className="containerApp">{newsList}</div>
    </>
  );
}

export default App;
