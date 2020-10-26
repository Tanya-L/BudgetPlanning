import React, {useEffect, useState} from 'react';
import './App.css';
import IncomeTotal from './components/IncomeTotal'
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import {MoneyItem} from "./MoneyItem";
import BudgetTotal from "./components/BudgetTotal";

function App() {

    const [allIncomeItems, setAllIncomeItems] = useState<MoneyItem[]>([]);
    const [allExpenseItems, setAllExpenseItems] = useState<MoneyItem[]>([]);
    const [totalIncome, setTotalIncome] = useState<number>(0);
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [totalBudget, setTotalBudget] = useState<number>(0);

    useEffect(() => {
        setTotalIncome(allIncomeItems.reduce((sum: number, el: MoneyItem): number => sum + el.price, 0))
    }, [allIncomeItems]);

    useEffect(() => {
        setTotalExpense(allExpenseItems.reduce((sum: number, el: MoneyItem): number => sum + el.price, 0))
    }, [allExpenseItems]);

    useEffect(() => {
            setTotalBudget(totalIncome - totalExpense);
        },
        [totalIncome, totalExpense]);

    function addIncome(i: MoneyItem) {
        setAllIncomeItems([...allIncomeItems, i]);
    }

    function addExpense(i: MoneyItem) {
        setAllExpenseItems([...allExpenseItems, i]);
    }

    function deleteIncome(indexToDelete: number) {
        let temp = allIncomeItems.filter((v, index) => index !== indexToDelete);
        setAllIncomeItems(temp);
    }

    function deleteExpense(indexToDelete: number) {
        let temp = allExpenseItems.filter((v, index) => index !== indexToDelete);
        setAllExpenseItems(temp);
    }

    return (
        <div className="App">
            <h1 className="title">Simple budget planning</h1>
            <IncomeTotal totalIncome={totalIncome}/>
            <IncomeForm addIncome={addIncome}/>
            <IncomeList allIncomeItems={allIncomeItems} deleteIncome={deleteIncome}/>

            <ExpenseTotal totalExpense={totalExpense}/>
            <ExpenseForm addExpense={addExpense}/>
            <ExpenseList allExpenseItems={allExpenseItems} deleteExpense={deleteExpense}/>

            <BudgetTotal budget={totalBudget}/>
        </div>
    );
}

export default App;
