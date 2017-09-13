const Game = require('../models').Game;
const router = require('express').Router();

router
  .route('/')
  .get(function(req, res) {
    Game.findAll({})
      .then(results => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(results);
      })
      .catch(err => {
        console.log(err);
        res.json({ error: err });
      });
  })
  .post(function(req, res) {
    const { title, price } = req.body;
    Game.create({ title, price })
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
  Game.findById(req.params.id)
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
