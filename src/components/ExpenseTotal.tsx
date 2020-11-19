import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {MoneyItem} from "../MoneyItem";


function ExpenseTotal() {
    const {expenses} = useContext(GlobalContext)

    const totalExpense = expenses
        .reduce(
            (sum: number, el: MoneyItem): number => sum + el.price,
            0)

    return (
        <header>
            <h1>Expense </h1>
            <div className="total">${totalExpense}</div>
        </header>
    );
}

export default ExpenseTotal;