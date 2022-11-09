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
    console.log(res.data);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="containerApp">
      {news.map((itemList) => {
        return <NewsList key={itemList._id} newsList={itemList} />;
      })}
    </div>
  );
}

export default App;
