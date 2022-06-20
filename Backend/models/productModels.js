import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
})

const Products = mongoose.model('Product', productSchema)

export default Products