import multer from "../libs/multer";

import { Router } from "express";

import * as newsController from "../controllers/news.controller";

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getOneNews);
router.post("/news", multer.single("image"), newsController.createNews);
router.put("/news/:id", newsController.updateNews);
router.delete("/news/:id", newsController.deleteNews);

export default router;
