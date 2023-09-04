const express = require('express');
const app = express();
const dotenv = require("dotenv");
const products = require('./products/products');

dotenv.config();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
});

app.get('/products', (req, res) => {
    return res.json(products)
});

app.get('/products/:id', (req, res) => {
    let product = products.find(product => product._id === req.params.id);
    res.status(200).json(product)
});
const PORT = process.env.PORT || 2000
console.log(PORT)
app.listen(2000, console.log(`server runing on port ${PORT}`));