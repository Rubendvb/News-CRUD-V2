import { RequestHandler } from "express";

import News from "../models/News";

export const createNews: RequestHandler = async (req, res) => {
  const newsFound = await News.findOne({ title: req.body.title });

  if (newsFound) {
    return res
      .status(301)
      .json({ message: "Já existe uma notícia com este título!" });
  }

  console.log(req.body);

  const news = new News(req.body);
  const saveNews = await news.save();
  res.json(saveNews);
};

export const getNews: RequestHandler = async (req, res) => {
  try {
    const news = await News.find().sort({ updatedAt: -1 }); // Order by created
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
