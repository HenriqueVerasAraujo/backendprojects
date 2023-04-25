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
}

module.exports = {
    getAll,
    getOneById,
};