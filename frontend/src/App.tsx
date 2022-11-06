import { useEffect, useState } from "react";
import * as newsService from "./@types/NewsListService";

import { Props } from "./@types/news";
// import NewsItem from "./components/NewsItem/NewsItem";
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
    <>
      {news.map((itemList) => {
        return <NewsList key={itemList._id} />;
      })}

      {/* {news.map((item) => {
        return <NewsItem key={item._id} news={item} />;
      })} */}
    </>
  );
}

export default App;
