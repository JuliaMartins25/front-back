import prisma from "../../prisma/client.js";

class AvaliacaoModel {
    //Mostrar todas as avaliações
    getAll = async () => {
        return await prisma.avaliation.findMany();
    };

    //Criar uma avaliação
    create = async (nome, comentario, perfil) => {
        return await prisma.avaliation.create({
            data: {
                nome,
                comentario,
                perfil,
            },
        });
    };


    //Deletar uma avaliação pelo id
    delete = async (id) => {
        try {
            const avaliacaoDeletada = await prisma.avaliation.delete({
                where: { id },
            });

            return avaliacaoDeletada;
        } catch (error) {
            console.log("Erro ao deletar a avaliação!", error);
            throw error;
        }
    };

    getById = async (id) => {
        return await prisma.avaliation.findUnique({
            where: { id },
        });
    };
}

export default new AvaliacaoModel();