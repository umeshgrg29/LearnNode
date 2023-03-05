const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./helperUtil/path');

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactusRoute = require('./routes/contactus')

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute)
app.use(shopRoute)
app.use(contactusRoute)

app.use(errorController.get404page)


app.listen(4000)
