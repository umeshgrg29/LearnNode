const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')


const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs'); // added
app.set('views', 'views'); // Added

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactusRoute = require('./routes/contactus')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute)
app.use(shopRoute)
app.use(contactusRoute)

app.use(errorController.get404page)


app.listen(4000)
