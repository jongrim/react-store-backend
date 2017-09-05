const mysql = require('mysql2');
const config = require('../../config/config');

const connection = mysql.createConnection(config);

function viewProducts() {
  return new Promise(function(resolve, reject) {
    connection.query('SELECT * FROM products', (err, results, fields) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

function addInventory(item_id, quantity) {
  return new Promise(function(resolve, reject) {
    connection.execute(
      'UPDATE `products` SET `stock_quantity` = stock_quantity + ? WHERE `item_id`=?',
      [quantity, item_id],
      (err, results, fields) => {
        if (err) throw err;
        resolve(results);
      }
    );
  });
}

function addNewProduct({ product_name, department_name, price, stock_quantity } = {}) {
  return new Promise(function(resolve, reject) {
    connection.execute(
      'INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales) VALUES (?, ?, ?, ?, ?)',
      [product_name, department_name, price, stock_quantity, 0],
      function(err, results, fields) {
        if (err) throw err;
        resolve(results);
        connection.end(err => {
          if (err) throw err;
        });
      }
    );
  });
}

module.exports.viewProducts = viewProducts;
module.exports.addInventory = addInventory;
module.exports.addNewProduct = addNewProduct;
