const db = require('../models');
const Product = db.product;

exports.create = (req, res) =>{
    if (!req.body.name) {
        res.status(400).send({ message: "Please enter the name of product." });
    }
    const product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    });
    product
        .save(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occured while creating the product." });
        })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data required for update"
        });
    }
    const id = req.params.id;
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Product with id=${id}. Product not found`
                })
            } else res.send({ message: "Product was updated succesfully" })
        })
        .catch(err => {
            res.status(500).send({ message: "Error when updating Product with " + id})
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Product.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Product with id=${id}. Product not found`
                });
            } else {
                res.send({
                    message: "Product was deleted succesfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when deleting Product with" + id
            })
        })
}

exports.findAll = (req, res) => {
    Product.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving products."
            })
        })
}