const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = mongoose.model('Product');

const getProduct = (req, res) => {
    const sku = req.params.sku;

    if (sku) {
        Product.find({ sku })
            .then(data => res.send(data))
            .catch(err => res.send(err));
        // product.inventory.quantity = +1;
    } else {
        res.json({ response: 'Informe o sku para buscar o produto!' })
    }
};

const createProduct = (req, res) => {
    if (req.body) {
        Product.create(req.body)
            .then(data => res.send({
                status: 200,
                response: 'Produto Cadastrado :D',
                data
            }))
            .catch(err => res.send(err));

    } else {
        res.json({ response: 'Envie todas as propriedades do produto para cadastrar!' })
    }
};

const updateProduct = (req, res) => {
    const sku = req.params.sku;
    if (sku) {
        Product.updateOne({ sku }, req.body)
            .then(data => res.send({
                status: 200,
                response: 'Produto Atualizado :D',
                nModified: data.nModified,
            }))
            .catch(err => res.send(err));
    } else {
        res.json({ response: 'Informe o sku para atualizar o produto!' })
    }
};

const deleteProduct = (req, res) => {
    const sku = req.params.sku;
    if (sku) {
        Product.deleteOne({ sku })
            .then(data => res.send({
                status: 200,
                response: 'Produto Excluído',
            }))
            .catch(err => res.send(err));
    } else {
        res.json({ response: 'Informe o sku para excluir o produto!' })
    }
};

module.exports = { getProduct, createProduct, updateProduct, deleteProduct };