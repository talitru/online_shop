const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products  = adminData.products;
  res.render('shop', {prods: products, docTitle: 'shop'});// look for rendering .pug files in views folder wich defined in app.set(...)
});


module.exports = router;