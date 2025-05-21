import CardModel from '../models/card.model.js';


class CardController {

    async findAll(req, res) {
        const title = req.query.title;


        try {
            const cards = await CardModel.findAll(title);

            return res.status(200).json(cards);
        } catch (error) {
            console.error("Error finding all cards:", error);
            return res.status(500).json({ message: "Error finding all cards", error });
            
        }
    }

    async create(req, res) {
        try {
            const { title, image } = req.body;

            // Validação básica
            if (!title || !image) {
                return res.status(400).json({ error: "Title and image are required" });
            }

            const data = {
                title,
                image,
            };

            const newCard = await CardModel.create(data);
            return res.status(201).json({
                message: "New card successfully create!",
                newCard,
            });
        } catch (error) {
            console.error("Error creating new card:", error);
            res.status(500).json({ error: "Error creating new card" });
        }
    }
};

export default new CardController();