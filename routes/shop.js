const express = require('express');


const router = express.Router();

router.get('/', (req, res, next)=>{
    // console.log('In another middleware')
    res.send(`<h1>In the express js home page</h1>`)
}
)

module.exports = router;