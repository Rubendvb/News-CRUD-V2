import { RequestHandler } from "express";
import News from "../models/News";

export const createNews: RequestHandler = async (req, res) => {
  const newsFound = await News.findOne({ title: req.body.title });
  const { title, subtitle, content, author, editorial, image } = req.body;
  const newsAndImage = {
    title: title,
    subtitle: subtitle,
    content: content,
    author: author,
    editorial: editorial,
    image: req.file?.path,
  };

  if (newsFound) {
    return res
      .status(301)
      .json({ message: "Já existe uma notícia com este título!" });
  }

  console.log(newsAndImage);

  const news = new News(newsAndImage);
  const saveNews = await news.save();
  res.json(saveNews);
};

export const getNews: RequestHandler = async (req, res) => {
  try {
    const news = await News.find();
    return res.json(news);
  } catch (error) {
    res.json(error);
  }
};

export const getOneNews: RequestHandler = async (req, res) => {
  const newsFound = await News.findById(req.params.id);
  if (!newsFound) {
    return res.status(204).json();
  }
  return res.json(newsFound);
};

export const deleteNews: RequestHandler = async (req, res) => {
  const newsFound = await News.findByIdAndDelete(req.params.id);
  if (!newsFound) {
    return res.status(204).json();
  }
  return res.json(newsFound);
};

export const updateNews: RequestHandler = async (req, res) => {
  const newsUpdate = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!newsUpdate) {
    return res.status(204).json();
  }

  res.json(newsUpdate);
};
