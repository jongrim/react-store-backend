const router = require('express').Router();
const books = require('./book.js');
const movies = require('./movie.js');

router.use('/books', books);
router.use('/movies', movies);

module.exports = router;