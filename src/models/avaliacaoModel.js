import prisma from "../../prisma/client.js";

class AvaliacaoModel {
    getAll = async () => {
        return await prisma.avaliation.findMany();
      };
    

      create = async (nome, comentario, perfil) => {
        return await prisma.avaliation.create({
            data: {
                nome,
                comentario,
                perfil,
            },
        });
    };
}

export default new AvaliacaoModel();