
const express = require('express');

const router = express.Router();

const usercontroller = require('../controllers/expense')


router.post('/add-expense', usercontroller.addExpense)

router.get('/get-expense', usercontroller.getExpense)

router.delete('/delete-expense/:id', usercontroller.deleteExpense)

router.put('/edit-expense/:id', usercontroller.editExpense)

module.exports = router;