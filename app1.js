const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./helperUtil/path');

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute)
app.use(shopRoute)

app.get('/contactus', (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
})

app.post('/success', (req, res) => {
    res.send(`</h1>Form filled Successfully`)
    
  })

app.use((req, res, next)=>{
    // res.status(404).send(`<h1>page not  found</h1>`)
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'))
})


app.listen(4000)
