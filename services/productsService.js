const productsModel = require('../models/productsModel');

const getAll = async () => {
  const allProducts = await productsModel.getAll();
  return allProducts;
};

const getOneById = async (id) => {
  const errObject = {
    status: 404,
    error: 'Product not found',
  };

  const singleProduct = await productsModel.getOneById(id);
  if (!singleProduct) return errObject;

  return singleProduct;
};


module.exports = {
    getAll,
    getOneById
};