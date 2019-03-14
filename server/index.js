require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const path = require('path');

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

app.use('/', express.static(path.join(__dirname, '../loaderio')));
app.use('/:itemId', express.static(__dirname + '/../public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//////////////////////////////////
/// for deployment to EC2 ////////
/// setup as a proxy for db //////
//////////////////////////////////
const proxy = require('http-proxy-middleware');
console.log('here in server!!!!');

// app.use(
//   '/products/:itemId',
//   proxy({
//     target: 'http://52.0.82.54:3002',
//     changeOrigin: true
//   })
// );

// app.use(
//   '/variants/:itemId',
//   proxy({
//     target: 'http://52.0.82.54:3002',
//     changeOrigin: true
//   })
// );

// app.use(
//   '/products/',
//   proxy({
//     target: 'http://52.0.82.54:3002',
//     changeOrigin: true
//   })
// );

//////////////////////////////////
//////////////////////////////////
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: '52.0.82.54',
//   user: 'root',
//   password: '',
//   database: 'product_options'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   // query = ("SELECT * FROM products WHERE itemId = 1")
//   // connection.
//   // console.log
//   console.log('connected as id ' + connection.threadId);
// });

// connection.query(
//   ('SELECT * FROM products WHERE itemId = 1',
//   function(error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
//   })
// );

app.get('/products/:itemId', function gettingProducts(req, res) {
  getProduct(req.params.itemId)
    .then(product => {
      res.status(200).send(product);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

app.get('/variants/:itemId', function gettingVariants(req, res) {
  const itemId = req.params.itemId;
  getVariants(itemId)
    .then(variants => {
      res.status(200).send(variants);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

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
