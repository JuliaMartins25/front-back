import express from "express";
import avaliacaoController from "../controllers/avaliacaoController.js";

const router = express.Router();

router.get("/", avaliacaoController.getAll);
router.get("/:id", avaliacaoController.getById);
router.post("/", avaliacaoController.create);
router.delete("/:id", avaliacaoController.delete);

export default router;
