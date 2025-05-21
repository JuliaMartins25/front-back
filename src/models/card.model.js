import prisma from "../../prisma/prisma.js";

class CardModel {
    // Obter todos os jogos
    async findAll(title) {

        const where = {};

        if (title) {
            where.title = {
                contains: title,
            };
        }

        const cards = await prisma.card.findMany({where});

            return{
                total: cards.length,
                cards,
            };
        }

        // Criar um novo jogo
        async create(data) {
            const card = await prisma.card.create({
                data,
            });

            return card;
        }
}

export default new CardModel();