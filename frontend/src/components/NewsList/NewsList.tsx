import { Link } from "react-router-dom";
import { Props } from "../../@types/news";

import "./NewsList.scss";
interface NewsListProps {
  newsList: Props;
}

export default function NewsList({ newsList }: NewsListProps) {
  return (
    <Link to={`/news/${newsList._id}`} className="containerNewsList">
      {newsList.image ? (
        <picture className="containerNewsList__containerImg">
          <img
            className="containerNewsList__containerImg__img"
            src={newsList.image}
            alt=""
          />
        </picture>
      ) : (
        ""
      )}

      <div>
        <h1 className="containerNewsList__title">{newsList.title}</h1>
        <h2 className="containerNewsList__subtitle">{newsList.subtitle}</h2>
      </div>
    </Link>
  );
}
