const mongoose = require('mongoose');
const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: String,
        Quantity: Number,
        Price: Number,
    })
)
module.exports = Product;