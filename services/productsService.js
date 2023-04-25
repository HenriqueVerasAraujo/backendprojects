const productsModel = require('../models/productsModel');

const getAll = async () => {
  const allProducts = await productsModel.getAll();
  return allProducts;
};

module.exports = {
    getAll,
};