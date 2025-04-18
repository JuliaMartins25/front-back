import avaliacaoModel from "../models/avaliacaoModel.js";

class AvaliacaoController {
    getAll = async (req, res) => {
        try {
          const avaliacoes = await avaliacaoModel.getAll();
          res.json(avaliacoes);
        } catch (error) {
          console.error(error);
          res.status(500).json({ erro: "Erro ao buscar as avaliações" });
        }
      };

      create = async (req, res) => {
        const {nome, comentario, perfil} = req.body;

        try {
            if (!nome) {
                return res.status(400).json({ erro: "Nome é obrigatório" });
            }
            if (!comentario) {
                return res.status(400).json({ erro: "Comentario é obrigatório" });
            }

            const novaAvaliacao = await avaliacaoModel.create(nome, comentario, perfil);
            res.status(201).json(novaAvaliacao);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar avaliação" });
        }
    };

    delete = async (req, res) => {
      const { id } = req.params;
  
      try {
        const sucesso = await avaliacaoModel.delete(Number(id));
  
        if (!sucesso) {
          return res.status(404).json({ erro: "Avaliação não encontrada" });
        }
  
        res.status(200).send({ message: "Avaliação deletada com sucesso!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao excluir avaliação!" });
      }
    };

    getById = async (req, res) => {
      const { id } = req.params;

      try {
          const avaliacao = await avaliacaoModel.getById(parseInt(id));

          if (!avaliacao) {
              return res.status(404).json({ erro: "Avaliação não encontrada" });
          }

          res.json(avaliacao);
      } catch (error) {
          console.error(error);
          res.status(500).json({ erro: "Erro ao buscar a avaliação" });
      }
  };

}

export default new AvaliacaoController();