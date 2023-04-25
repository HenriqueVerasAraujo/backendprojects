const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
    try {
      const allProducts = await productsService.getAll();
      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
const test = async(_req, res) => {
  try {
    return res.status(200).json('deu certo');
  } catch (error) {
    return res.status(500).json({ error });
  }
}
  module.exports = {
    getAll,
    test,
}