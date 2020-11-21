import React, {useContext} from 'react';
import {MoneyItem} from "../MoneyItem";
import {GlobalContext} from "../context/GlobalState";

interface ExpenseItemsProps {
    expense: MoneyItem;
    index: number;
}

function ExpenseItem({expense, index}: ExpenseItemsProps) {
    const {deleteExpense} = useContext(GlobalContext)

    let day = expense.date.getDate();
    let month = expense.date.getMonth() + 1;
    let year = expense.date.getFullYear();

    const onRemoveClick = (i: string) => {
        if (deleteExpense) {
            deleteExpense(i);
        }
    }

    return (
        <div className="item">
            <button className="remove-item" onClick={() => onRemoveClick(expense.id)}>x</button>
            <div className="desc">{expense.description}</div>
            <div className="price">{expense.price} SEK</div>
            <div className="date">{day + "/" + month + "/" + year}</div>
        </div>
    )
}

export default ExpenseItem;