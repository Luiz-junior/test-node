const express = require('express');
const router = express.Router();

// const productData = require('../fakeAPI/product.json');
const axios = require('axios');
const baseUrl = 'http://localhost:3000/products';

const getProduct = (req, res) => {
    const sku = req.params.sku;
    if (sku) {
        const product = req.body;
        product.inventory.quantity = +1;
        res.send(product.inventory);
    } else {
        res.json({ response: 'Informe o sku para buscar o produto!' })
    }
};

const createProduct = (req, res) => {
    if (req.body) {
        const product = req.body;
        axios.get(`${baseUrl}`, product)
            .then((data) => res.send(data))
            //.then((data) => res.send({ status: 200, response: 'Produto Cadastrado :D' }))
            .catch(err => res.send(err));
    } else {
        res.json({ response: 'Não há produtos cadastrados' })
    }
};

const updateProduct = (req, res) => {
    const sku = req.params.sku;
    if (sku) {
        res.send({ status: 200, response: 'Produto Atualizado :D' });
    } else {
        res.json({ response: 'Informe o sku para atualizar o produto!' })
    }
};

const deleteProduct = (req, res) => {
    const sku = req.params.sku;
    if (sku) {
        res.send({ status: 200, response: 'Produto Excluído', });
    } else {
        res.json({ response: 'Informe o sku para excluir o produto!' })
    }
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };