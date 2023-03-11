
const express = require('express');

const router = express.Router();

const usercontroller = require('../controllers/user')


router.post('/add-user', usercontroller.addUser)

router.get('/get-users', usercontroller.getUser)

router.delete('/delete-users/:id', usercontroller.deleteUser)

module.exports = router;