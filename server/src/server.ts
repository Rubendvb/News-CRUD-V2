import express from "express";

const app = express();

app.get("/news", (req, res) => {
  return res.json([]);
});

app.post("/news", (req, res) => {
  return res.status(201).json([]);
});

app.get("/news/:id", (req, res) => {});

app.delete("/news/:id", (req, res) => {});

app.put("/news/:id", (req, res) => {});

app.listen(3333);
