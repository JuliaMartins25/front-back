import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import avaliacaoRouter from "./avaliacaoRoutes.js";
import galleryRouter from "./gallery.routes.js";
import cardRouter from "./card.routes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/gallery", galleryRouter);
router.use("/avaliacao", avaliacaoRouter);
router.use("/card", cardRouter);

// Rotas protegidas
router.use(authMiddleware);


export default router;
