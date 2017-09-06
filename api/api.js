const router = require('express').Router();
const products = require('./products/productsRoutes');
const books = require('./books/book.js');

router.use('/products', products);
router.use('/books', books);

module.exports = router;