import express from "express";
import avaliacaoController from "../controllers/avaliacaoController.js";

const avaliacaoRouter = express.Router();

avaliacaoRouter.get("/", avaliacaoController.getAll);
avaliacaoRouter.get("/:id", avaliacaoController.getById);
avaliacaoRouter.post("/", avaliacaoController.create);
avaliacaoRouter.delete("/:id", avaliacaoController.delete);

export default avaliacaoRouter;
