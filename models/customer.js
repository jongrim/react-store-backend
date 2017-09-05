const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config);

exports.getAll = function() {
  return new Promise(function(resolve, reject) {
    connection.query(`SELECT * FROM products`, function(err, results, fields) {
      resolve(results);
    });
  });
};

exports.purchaseProduct = function(id, qty) {
  return new Promise(function(resolve, reject) {
    console.log(id, qty);
    connection.execute(`SELECT stock_quantity, price FROM products WHERE item_id = ?`, [id], (err, results, fields) => {
      if (results.length === 0) return reject('No results!');
      if (results[0].stock_quantity < qty) {
        resolve(`Insufficient quantity!`);
      } else {
        connection.query(
          `UPDATE products SET stock_quantity = ? - ? WHERE item_id = ?; SELECT * FROM products;`,
          [qty, id],
          (err, results, fields) => {
            resolve('Transaction successfull');
          }
        );
      }
    });
  });
};
