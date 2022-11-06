import { Link } from "react-router-dom";
import { Props } from "../../@types/news";

import "./NewsList.scss";
interface NewsListProps {
  newsList: Props;
}

export default function NewsList({ newsList }: NewsListProps) {
  //  {
  //    news.map((item) => {
  //      return <NewsItem key={item._id} news={item} />;
  //    });
  //  }
  return (
    <Link to={`/news/${newsList._id}`} className="containerNewsList">
      <h1 className="containerNewsList__title">{newsList.title}</h1>
      <h2 className="containerNewsList__subtitle">{newsList.subtitle}</h2>
    </Link>
  );
}
