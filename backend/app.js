const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();

mongoose.connect('mongodb+srv://mostefamourad:canari404@cluster0.lsm3f.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/products',(req,res,next) => {
  Product.find()
         .then( products => res.status(200).json({products}))
         .catch( error => res.status(400).json({error}));  
});

module.exports = app;