const Expense = require('../models/Expense')


const addExpense = async (req, res, next) => {
    try {
        const expense = req.body.expense;
        const description = req.body.description;
        const data = await Expense.create({ expense: expense, description: description })
        res.status(201).json({ newExpenseDetail: data })
    }
    catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

const getExpense = async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json({ allExpenses: expenses })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


const deleteExpense = async (req, res, next) => {
    console.log("Inside the delete  expense")
    console.log(req.params.id)
    try {
        if(req.params.id == 'undefined'){
            console.log('Id is missing')
            return res.status(400).json({err : 'ID is missing'})
        }
        const uId = req.params.id;
        await Expense.destroy({ where: { id: uId } })
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

const editExpense = async (req,res, next) =>  {
    try {
        const expenseId = req.params.id;
        const expense = await Expense.findOne({ where: { id: expenseId } });
        if (!expense) {
          return res.status(404).json({ message: 'Expense not found' });
        }
    
        const updatedExpense = req.body.expense;
        const updatedDescription = req.body.description;
    
        await Expense.update(
          { expense: updatedExpense, description: updatedDescription },
          { where: { id: expenseId } }
        );
    
        const updatedData = await Expense.findOne({ where: { id: expenseId } });
        res.status(200).json({ updatedExpenseDetail: updatedData });
      } catch (err) {
        res.status(500).json({ error: err });
      }
}

module.exports = {
    addExpense,
    getExpense,
    deleteExpense,
    editExpense
}