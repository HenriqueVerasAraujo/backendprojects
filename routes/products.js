const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/test', productsController.test);

module.exports = productsRouter;