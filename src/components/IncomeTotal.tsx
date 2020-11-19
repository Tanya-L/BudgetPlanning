import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {MoneyItem} from "../MoneyItem";

function IncomeTotal() {
    const {incomes} = useContext(GlobalContext)

    const totalIncome = incomes
        .reduce(
            (sum: number, el: MoneyItem): number => sum + el.price,
            0)

    return (
        <header>
            <h1>Income </h1>
            <div className="total">${totalIncome}</div>
        </header>
    );
}

export default IncomeTotal;