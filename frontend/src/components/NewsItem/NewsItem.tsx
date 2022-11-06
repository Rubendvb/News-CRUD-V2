import { Props } from "../../@types/news";

interface NewsProps {
  news: Props;
}

export default function NewsItem({ news }: NewsProps) {
  return (
    <div>
      <h1>{news.title}</h1>
      <h2>{news.subtitle}</h2>
      <span>Autor {news.author} </span>
      <span>Criado {news.createdAt}</span>
      <p>{news.content}</p>
    </div>
  );
}
