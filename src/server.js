import express from "express";
import avaliacaoRoutes from "./routes/avaliacaoRoutes.js"
import cors from "cors";

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
app.use("/avaliacao", avaliacaoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
