import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

import accountRoutes from './routes/accounts.js'
import productsRoutes from './routes/products.js'

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(cors())

app.use('/account', accountRoutes)
app.use('/product', productsRoutes)

const CONNECTION_URL = "mongodb://localhost:27017";
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(` Server is running on ${PORT}`)))
    .catch((error) => console.log(error.message));