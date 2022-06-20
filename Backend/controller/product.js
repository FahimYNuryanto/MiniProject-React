import Products from "../models/productModels.js"

export const getAllProduct = async (req, res) => {
    try {
        const getAll = await Products.find();
        res.status(200).json(getAll)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getDetailProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const getOne = await Products.findOne(id);
        res.status(200).json(getOne)
    } catch (error) {
        res.status(404).json({ message: error.message })    
    }
}

export const postProduct = async (req, res) => {
    const { name, quantity, price } = req.body;

    try {
        const result = await Products.create({ name: name, quantity: quantity, price: price });
        res.status(201).json(result);
    }
    catch(error) {
        res.status(409).json({ message: error.message })
    }

}

export const updateProduct = async (req, res) => {
    const { id: _id  }= req.params;
    const product = req.body
    
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ message:  'Product not found' });
    }

    const updatedProduct = await Products.findByIdAndUpdate(_id, product, { new: true })

    res.json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No product with that id")
    }
    await Products.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully"})
}