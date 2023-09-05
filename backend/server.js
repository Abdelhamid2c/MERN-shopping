const express = require('express');
const app = express();
const dotenv = require("dotenv");
const products = require('./products/products');
const connectToDb = require("./config/dbConnection")
const Allow = require("./middleware/allow")
const colors = require("colors")

dotenv.config();

connectToDb();

app.use(Allow);

app.get('/products', (req, res) => {
    return res.json(products)
});

app.get('/products/:id', (req, res) => {
    let product = products.find(product => product._id === req.params.id);
    res.status(200).json(product)
});


const PORT = process.env.PORT || 2000
app.listen(2000, console.log(`server runing on port ${PORT}`.bgMagenta));