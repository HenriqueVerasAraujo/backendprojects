const connection = require('./connection');

const getAll = async () => {
  const myQuery = 'SELECT * FROM StoreManager.products';
  const [allProducts] = await connection.execute(myQuery);
  return allProducts;
};

const getOneById = async (id) => {
  const myQuery = 'Select * FROM StoreManager.products where id=?';
  const [[singleProduct]] = await connection.execute(myQuery, [id]);
  return singleProduct;
};

const getOneByName = async (name) => {
  const myQuery = 'Select * FROM StoreManager.products where name=?';
  const [[singleProduct]] = await connection.execute(myQuery, [name]);
  return singleProduct;
}

const createProduct = async (name) => {
  const myQuery = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(myQuery, [name]);
  return { id: newProduct.insertId, name };
};

module.exports = {
    getAll,
    getOneById,
    getOneByName,
    createProduct,
};