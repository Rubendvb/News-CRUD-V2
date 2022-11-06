import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Props } from "../../@types/news";

import { toast } from "react-toastify";

import * as newsService from "../../@types/NewsListService";

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export default function CreateNews() {
  let navigate = useNavigate();

  const initialState = {
    title: "",
    subtitle: "",
    author: "",
    content: "",
    editorial: "",
  };

  const [news, setNews] = useState<Props>(initialState);

  const handleInputChange = (e: InputChange) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await newsService.createNews(news);

    toast.success("Notícia criada");

    navigate("/");

    setNews(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Título"
            onChange={handleInputChange}
            value={news.title}
            autoFocus
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Subtitulo"
            onChange={handleInputChange}
            value={news.subtitle}
          />
          <textarea
            name="content"
            id="content"
            onChange={handleInputChange}
            value={news.content}
            cols={150}
            rows={50}
            placeholder="Escreva seu texto aqui"
          ></textarea>
        </div>

        <div>
          <label htmlFor="author">Autor</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={handleInputChange}
            value={news.author}
          />

          <label htmlFor="editorial">Editoria</label>
          <select
            name="editorial"
            id="editorial"
            onChange={handleInputChange}
            value={news.editorial}
          >
            <option value="">Selecione a editoria</option>
            <option value="brasil">Brasil</option>
            <option value="politica">Política</option>
            <option value="financas">Finanças</option>
            <option value="empresas">Empresas</option>
            <option value="mundo">Mundo</option>
            <option value="agronegocios">Agronegócios</option>
            <option value="legislacao">Legislação</option>
            <option value="opiniao">Opinião</option>
          </select>
        </div>

        <button>Criar notícia</button>
      </form>
    </div>
  );
}
