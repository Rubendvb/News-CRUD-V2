import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Props } from "../../@types/news";
import * as newsService from "../../@types/NewsListService";

export default function NewsItem({
  author,
  content,
  createdAt,
  editorial,
  subtitle,
  title,
  _id,
}: Props) {
  const initialState = {
    author: "",
    content: "",
    createdAt: "",
    subtitle: "",
    title: "",
    _id: "",
  };

  const [newsId, setNewsId] = useState<Props>(initialState);

  const params = useParams();

  // console.log(params);

  const getNewsParamsId = async (id: string) => {
    const res = await newsService.getNewsId(id);
    console.log(res.data);
    const { author, content, createdAt, subtitle, title } = res.data;
    setNewsId({ author, content, createdAt, subtitle, title, _id });
  };

  useEffect(() => {
    if (params.id) {
      getNewsParamsId(params.id);
    }
  }, []);

  return (
    <div>
      <h1>{newsId.title}</h1>
      <h2>{newsId.subtitle}</h2>
      <span>Por {newsId.author}</span>
      <span>Por {newsId.createdAt}</span>
      <p>Por {newsId.content}</p>
    </div>
  );
}
