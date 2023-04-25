const connection = require('./connection');

const getAll = async () => {
  const myQuery = 'SELECT * FROM StoreManager.products';
  const [allProducts] = await connection.execute(myQuery);
  return allProducts;
};

module.exports = {
    getAll,
};
  
