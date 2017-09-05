const router = require('express').Router();
const managerModel = require('../models/manager');

router.get('/', function(req, res) {
  managerModel.viewProducts().then(results => {
    res.json(results);
  });
});

module.exports = router;
