const express = require('express');
const routes = express.Router();

const product = require('./products');

// routes product
routes.get('/product/:sku?', product.getProduct);
routes.post('/product/create', product.createProduct);
routes.post('/product/update/:sku?', product.updateProduct);
routes.post('/product/delete/:sku?', product.deleteProduct);

module.exports = routes;