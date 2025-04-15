import express from "express";
import avaliacaoController from "../controllers/avaliacaoController.js";

const router = express.Router();

router.get("/", avaliacaoController.getAll);
router.post("/", avaliacaoController.create);

export default router;
