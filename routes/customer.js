const express = require('express');
const router = require('express').Router();
const customer = require('../models/customer.js');

router.get('/', function(req, res) {
  customer.getAll().then(results => {
    res.json(results);
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  const id = req.body.product_id;
  const qty = req.body.quantity;

  customer
    .purchaseProduct(id, qty)
    .then(msg => {
      res.json({ message: msg });
    })
    .catch(err => {
      console.log(err);
      res.send({ message: 'Server error' });
    });
});

module.exports = router;
