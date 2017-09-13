const router = require('express').Router();
const books = require('./book.js');
const games = require('./game.js');
const movies = require('./movie.js');

router.use('/books', books);
router.use('/games', games);
router.use('/movies', movies);

module.exports = router;
