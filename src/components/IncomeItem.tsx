import React, {useContext} from 'react';
import {MoneyItem} from "../MoneyItem";
import {GlobalContext} from "../context/GlobalState";

interface IncomeItemsProps {
    income: MoneyItem;
    index: number;
}

function IncomeItem({income, index}: IncomeItemsProps) {
    const {deleteIncome} = useContext(GlobalContext)

    let day = income.date.getDate();
    let month = income.date.getMonth() + 1;
    let year = income.date.getFullYear();

    const onRemoveClick = (i: string) => {
        if (deleteIncome) {
            deleteIncome(i);
        }
    }

    return (
        <div className="item">
            <button className="remove-item" onClick={() => onRemoveClick(income.id)}>x</button>
            <div className="desc">{income.description}</div>
            <div className="price">{income.price} SEK</div>
            <div className="date">{day + "/" + month + "/" + year}</div>
        </div>
    )
}

export default IncomeItem;