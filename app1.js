// const http = require('http')
// const routes = require('./routes')

const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next)=>{
    // console.log('In the middleware')
    res.send(`<form action = "/product" method = "POST"><input type="text" name = "title" ><input type="text" name = "size" ><button type="submit">Add</button></form>`)
})

app.post('/product', (req, res, next) =>{
    console.log(req.body)
    res.redirect('/');
})

app.use('/', (req, res, next)=>{
    // console.log('In another middleware')
    res.send(`<h1>In the express js home page</h1>`)

})


app.listen(4000)
