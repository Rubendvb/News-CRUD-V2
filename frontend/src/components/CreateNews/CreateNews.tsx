import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Props } from "../../@types/news";

import { toast } from "react-toastify";

import * as newsService from "../../@types/NewsListService";

type InputChange = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export default function CreateNews() {
  let navigate = useNavigate();
  let params = useParams();

  const initialState = {
    author: "",
    content: "",
    createdAt: "",
    editorial: "",
    subtitle: "",
    title: "",
    image: "",
    updatedAt: "",
  };

  const [news, setNews] = useState<Props>(initialState);

  const handleInputChange = (e: InputChange) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await newsService.createNews(news);

      toast.success("Notícia criada");

      setNews(initialState);
    } else {
      await newsService.updateNewsId(params.id, news);

      toast.success("Notícia atualizada");
    }

    navigate("/");
  };

  const getNews = async (id: string) => {
    const res = await newsService.getNewsId(id);

    const { title, subtitle, content, author, editorial, image } = res.data;

    setNews({ title, subtitle, content, author, editorial, image });
  };

  useEffect(() => {
    if (params.id) {
      getNews(params.id);
    }
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="/news"
        method="POST"
        encType="multipart/form-data"
      >
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
            <option value="sem-editoria">Selecione a editoria</option>
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

        <label htmlFor="image">Inserir a url da imagem</label>
        <input
          type="url"
          name="image"
          id="image"
          onChange={handleInputChange}
        />

        {params.id ? (
          <button>Atualizar</button>
        ) : (
          <button>Criar notícia</button>
        )}
      </form>
    </div>
  );
}
