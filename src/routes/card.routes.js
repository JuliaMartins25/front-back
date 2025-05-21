import express from 'express';

import CardController from '../controllers/card.controller.js';

const cardRouter = express.Router();

cardRouter.get('/', CardController.findAll);
cardRouter.post('/', CardController.create);


export default cardRouter;