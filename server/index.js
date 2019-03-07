const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { getProduct, createProduct, updateProduct } = require('../db/index');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.get('/products', (req, res) => {
//   Product.find()
//     .then(products => res.status(200).send(JSON.stringify(products)))
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

app.get('/products/random', (req, res) => {
  const randomProductId = Math.floor(Math.random() * 10000000);
  getProduct(randomProductId)
    .then(product => {
      console.log('retrieved the random product');
      res.status(200).send(JSON.stringify(product));
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/products/:itemId', (req, res) => {
  const itemId = req.params.itemId;
  getProduct(itemId)
    .then(product => {
      console.log('retrieved specific product');
      res.status(200).send(JSON.stringify(product));
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.post('/products/', (req, res) => {
  const product = req.body;
  createProduct(product).then(() => {
    console.log('created product!');
    res.status(200).end();
  });
});

app.put('/products/:itemId', (req, res) => {
  const updatedItem = req.body;
  updateProduct(updatedItem).then(() => {
    console.log('product updated!');
    res.status(200).end();
  });
});

if (!module.parent) {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

module.exports = app;
