const Movie = require('../models').Movie;
const router = require('express').Router();

router
  .route('/')
  .get(function(req, res) {
    Movie.findAll({})
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
    Movie.create({ title, price })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.json({ error: err });
      });
  });

router.route('/:id').get(function(req, res) {
  console.log(req.params.id);
  Movie.findById(req.params.id)
    .then(result => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({ error: err });
    });
});

module.exports = router;
