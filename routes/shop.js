const express = require('express');

const path = require('path')

const rootDir = require('../helperUtil/path');


const router = express.Router();

router.get('/', (req, res, next)=>{
    // console.log('In another middleware')
    // res.send(`<h1>In the express js home page</h1>`)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}
)

module.exports = router;