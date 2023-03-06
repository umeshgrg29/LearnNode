// const express = require('express');
// const path = require('path')

// const rootDir = require('../helperUtil/path');

// const router = express.Router();

// router.get('/add-product', (req, res, next)=>{
//     // console.log('In the middleware')
//     // res.send(`<form action = "/admin/add-product" method = "POST"><input type="text" name = "title" ><input type="text" name = "size" ><button type="submit">Add</button></form>`)
//     res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
// })

// router.post('/add-product', (req, res, next) =>{
//     console.log(req.body)
//     res.redirect('/');
// })

// module.exports = router;

const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
