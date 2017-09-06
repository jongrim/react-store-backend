const Book = require('../models').Book;
const router = require('express').Router();

router.route('/').get(function(req, res) {
  Book.findAll({})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.json('err');
    });
});

router.route('/:id').get(function(req, res) {
  console.log(req.params.id);
  Book.findById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({ error: err });
    });
});

module.exports = router;