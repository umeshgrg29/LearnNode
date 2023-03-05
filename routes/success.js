const express = require('express');

const path = require('path')

const rootDir = require('../helperUtil/path');


const router = express.Router();

router.post('/success', (req, res) => {
    res.send(`</h1>Form filled Successfully`)
    
  })

module.exports = router;