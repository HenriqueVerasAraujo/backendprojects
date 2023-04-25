const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
    try {
      const allProducts = await productsService.getAll();
      return res.status(200).json(allProducts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const singleProduct = await productsService.getOneById(id);
    if (singleProduct.status === 404) {
      return res.status(singleProduct.status).json(singleProduct.error);
    } else {
      return res.status(200).json(singleProduct);
    }
  } catch(err) {
    return res.status(500).json({ err });
  }
};

  module.exports = {
    getAll,
    getOneById,
}