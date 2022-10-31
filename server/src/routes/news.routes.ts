import { Router } from "express";

const router = Router();

router.get("/news", (req, res) => res.json("Obtendo Noticias"));

export default router;
