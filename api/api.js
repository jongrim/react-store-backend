const router = require('express').Router();
const products = require('./products/productsRoutes');

router.use('/products', products);

module.exports = router;
