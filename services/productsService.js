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

const getOneByName = async (name) => {
  const errObject = {
    status: 404,
    error: 'Product not found',
  };

  const singleProduct = await productsModel.getOneByName(name);
  if (!singleProduct) return errObject;

  return singleProduct;
};

const createProduct = async (name) => {
  if (!name) {
    return {status: 400, message: 'Enter a product Name.'}
  }
  const findProduct = await productsModel.getOneByName(name);
  if (findProduct) {
    return {status: 409, message: 'Product already exists.', product: findProduct}
  }
  const newProduct = await productsModel.createProduct(name);
  return newProduct;
};


module.exports = {
    getAll,
    getOneById,
    getOneByName,
    createProduct
};