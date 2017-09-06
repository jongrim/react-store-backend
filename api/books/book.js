const Book = require('../../models').Book;
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

module.exports = router;