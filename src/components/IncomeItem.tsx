import React from 'react';
import {MoneyItem} from "../MoneyItem";

interface IncomeItemsProps {
    income: MoneyItem;
    index: number;
    deleteIncome: (i: any) => any
}

function IncomeItem({income, index, deleteIncome}: IncomeItemsProps) {
    let day = income.date.getDate();
    let month = income.date.getMonth() + 1;
    let year = income.date.getFullYear();

    const onRemoveClick = (i: number) => {
        deleteIncome(i);
    }

    return (
        <div className="item">
            <button className="remove-item" onClick={() => onRemoveClick(index)}>x</button>
            <div className="desc">{income.description}</div>
            <div className="price">${income.price}</div>
            <div className="date">{day + "/" + month + "/" + year}</div>
        </div>
    )
}

export default IncomeItem;