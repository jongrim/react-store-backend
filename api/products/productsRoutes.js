const router = require('express').Router();
const controller = require('./productsController');

router.get('/', function(req, res) {
  controller.viewProducts().then(results => {
    res.json(results);
  });
});

module.exports = router;
