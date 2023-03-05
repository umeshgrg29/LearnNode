const path = require('path')

exports.get404page = (req, res, next)=>{
    // res.status(404).send(`<h1>page not  found</h1>`)
    res.status(404).sendFile(path.join(__dirname,'../', 'views', 'pagenotfound.html'))
}