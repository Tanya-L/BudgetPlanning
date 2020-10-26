import React, {useEffect, useState} from 'react';
import './App.css';
import Incomes from './components/Incomes'
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

    const [income, setIncome] = useState([]);
    const [expense, setExpense] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalBudget, setTotalBudget] = useState(0);

    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < income.length; i++) {
            temp += parseInt(income[i].price);
        }

        setTotalIncome(temp);
    }, [income]);

    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < expense.length; i++) {
            temp += parseInt(expense[i].price);
        }

        setTotalExpense(temp);
    }, [expense]);

    return (
        <div className="App">
            <Incomes totalIncome={totalIncome}/>
            <IncomeForm income={income} setIncome={setIncome}/>
            <IncomeList income={income} setIncome={setIncome}/>

            <Expenses totalExpense={totalExpense}/>
            <ExpenseForm expense={expense} setExpense={setExpense}/>
            <ExpenseList expense={expense} setExpense={setExpense}/>
        </div>
    );
}

export default App;
