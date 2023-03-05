const express = require('express');
const path = require('path')

const rootDir = require('../helperUtil/path');

const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    // console.log('In the middleware')
    // res.send(`<form action = "/admin/add-product" method = "POST"><input type="text" name = "title" ><input type="text" name = "size" ><button type="submit">Add</button></form>`)
    res.sendFile(path.join(rootDir, 'views', 'add-products.html'))
})

router.post('/add-product', (req, res, next) =>{
    console.log(req.body)
    res.redirect('/');
})

module.exports = router;