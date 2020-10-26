import React from 'react';
import {MoneyItem} from "../MoneyItem";

interface ExpenseItemsProps {
    expense: MoneyItem;
    index: number;
    deleteExpense: (i: any) => any
}

function ExpenseItem({expense, index, deleteExpense}: ExpenseItemsProps) {
    let day = expense.date.getDate();
    let month = expense.date.getMonth() + 1;
    let year = expense.date.getFullYear();

    const onRemoveClick = (i: number) => {
        deleteExpense(i);
    }

    return (
        <div className="expense-item">
            <button className="remove-item" onClick={() => onRemoveClick(index)}>x</button>
            <div className="desc">{expense.description}</div>
            <div className="price">${expense.price}</div>
            <div className="date">{day + "/" + month + "/" + year}</div>
        </div>
    )
}

export default ExpenseItem;