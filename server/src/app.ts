import express from "express";
import morgan from "morgan";
import cors from "cors";

import NoticiaRoutes from "./routes/news.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(NoticiaRoutes);

export default app;
