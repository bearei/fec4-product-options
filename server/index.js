// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getVariants
} = require('../db/index');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/:itemId', express.static(__dirname + '/../public'));

//////////////////////////////////
/// for deployment to EC2 ////////
/// setup as a proxy for db //////
//////////////////////////////////
const proxy = require('http-proxy-middleware');

app.use(
  '/products/:itemId',
  proxy({
    target: 'http://3.83.29.79:3002',
    changeOrigin: true
  })
);

app.use(
  '/variants/:itemId',
  proxy({
    target: 'http://3.83.29.79:3002',
    changeOrigin: true
  })
);

app.use(
  '/products/',
  proxy({
    target: 'http://3.83.29.79:3002',
    changeOrigin: true
  })
);

//////////////////////////////////
//////////////////////////////////

// app.get('/products/:itemId', function gettingProducts(req, res) {
//   getProduct(req.params.itemId)
//     .then(product => {
//       res.status(200).send(product);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

// app.get('/variants/:itemId', function gettingVariants(req, res) {
//   const itemId = req.params.itemId;
//   getVariants(itemId)
//     .then(variants => {
//       res.status(200).send(variants);
//     })
//     .catch(err => {
//       res.status(500).send(err);
//     });
// });

// app.post('/products/', function postingProduct(req, res) {
//   const product = req.body;
//   createProduct(product).then(() => {
//     res.status(200).end();
//   });
// });

// app.put('/products/:itemId', (req, res) => {
//   const updatedItem = req.body;
//   const itemId = req.params.itemId;
//   // console.log(updatedItem);
//   updateProduct(itemId, updatedItem).then(() => {
//     console.log('product updated!');
//     res.status(200).end();
//   });
// });

// app.delete('/products/:itemId', (req, res) => {
//   const itemId = req.params.itemId;
//   deleteProduct(itemId).then(() => {
//     console.log('product deleted!');
//     res.status(200).end();
//   });
// });

if (!module.parent) {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

module.exports = app;
