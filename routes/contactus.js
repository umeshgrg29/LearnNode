const express = require('express');

const path = require('path')

const rootDir = require('../util/path');


const router = express.Router();
const contactuscontroller = require('../controllers/contactus')

router.get('/contactus', contactuscontroller.getcontactuscontroller )

router.post('/success', contactuscontroller.postSuccessController)

module.exports = router;