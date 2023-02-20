// const http = require('http')
// const routes = require('./routes')

const express = require('express')
const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware')
    next(); // allow the request to continue to the next middleware in line
})

app.use((req, res, next)=>{
    console.log('In another middleware')
    res.send('<h1>Hello from Express!</h1>')

})


app.listen(4000)
