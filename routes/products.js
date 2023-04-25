const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', productsController.getOneById);
productsRouter.get('/', productsController.getOneByName);

productsRouter.post('/', productsController.createProduct);

module.exports = productsRouter;