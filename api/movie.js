const Movie = require('../models').Movie;
const router = require('express').Router();

router
  .route('/')
  .get(function(req, res) {
    Movie.findAll({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        console.log(err);
        res.json('err');
      });
  })
  .post(function(req, res) {
    const { title, price } = req.body;
    Movie.create({ title, price })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.json({ error: err });
      });
  });

router
  .route('/:id')
  .get(function(req, res) {
    console.log(req.params.id);
    Movie.findById(req.params.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.json({ error: err });
      });
  })
  .delete(function(req, res) {
    Movie.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({ error: err });
      });
  });

module.exports = router;
