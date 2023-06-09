const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses')
const { addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const router = require('express').Router()

//Income
router.get('/', (req,res)=>{
      res.send("PettyCash-Manager")
})
router.post('/add-income', addIncome)
router.get('/get-incomes',getIncomes)
router.delete('/delete-income/:id',deleteIncomes)

//Expense
router.post('/add-expense', addExpense)
router.get('/get-expense',getExpense)
router.delete('/delete-expense/:id',deleteExpense)
module.exports = router