import { ChangeEvent, FormEvent, useState } from "react";
import { Props } from "../../@types/news";

import * as newsService from "../../@types/NewsListService";

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export default function CreateNews() {
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

    const res = await newsService.createNews(news);
    console.log(res);
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
            autoFocus
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Subtitulo"
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            id="content"
            onChange={handleInputChange}
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
          />

          <label htmlFor="editorial">Editoria</label>
          <select name="editorial" id="editorial" onChange={handleInputChange}>
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
