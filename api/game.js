const Game = require('../models').Game;
const router = require('express').Router();
const igdb = require('igdb-api-node').default;

const client = igdb(process.env.IGDB_KEY);

function searchForGame(title) {
  return client
    .games({
      fields: '*',
      search: title
    })
    .then(response => {
      return response.body;
    })
    .catch(err => {
      throw err;
    });
}

function getGameLogoImage(cloudinary_id) {
  return client.image({ cloudinary_id }, 'logo_med', 'png');
}

async function getFirstGameFound(title) {
  const gameArray = await searchForGame(title);
  return gameArray[0];
}

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
      const gamePromise = getFirstGameFound(result.title);
      gamePromise
        .then(game => {
          if (game.cover.cloudinary_id) {
            game.imageUrl = getGameLogoImage(game.cover.cloudinary_id);
          }
          res.json(game);
        })
        .catch(err => {
          throw err;
        });
    })
    .catch(err => {
      console.log(err);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ error: err });
    });
});

module.exports = router;
