const path = require('path')

const rootDir = require('../helperUtil/path');

exports.getcontactuscontroller = (req,res,next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
}

exports.postSuccessController = (req, res) => {
    res.send(`</h1>Form filled Successfully`)
    
  }