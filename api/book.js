const Book = require('../models').Book;
const router = require('express').Router();

router
  .route('/')
  .get(function(req, res) {
    Book.findAll({})
      .then(results => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(results);
      })
      .catch(err => {
        console.log(err);
        res.json('err');
      });
  })
  .post(function(req, res) {
    const { title, price } = req.body;
    Book.create({ title, price })
      .then(result => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({ error: err });
      });
  });

router.route('/:id').get(function(req, res) {
  Book.findById(req.params.id)
    .then(result => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ error: err });
    });
});

module.exports = router;
