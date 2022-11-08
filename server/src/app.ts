import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import NoticiaRoutes from "./routes/news.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.resolve("uploads")));

app.use(NoticiaRoutes);

export default app;
