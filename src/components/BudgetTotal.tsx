import React, {useContext} from 'react';
import styled from "styled-components";
import {GlobalContext} from "../context/GlobalState";
import {MoneyItem} from "../MoneyItem";

const BudgetStyle = styled.section`
    padding: 2em;
    font-size: 22px;
    }
    `;

function BudgetTotal() {
    const {incomes, expenses} = useContext(GlobalContext)

    const totalIncome = incomes
        .reduce(
            (sum: number, el: MoneyItem): number => sum + el.price,
            0)
    const totalExpense = expenses
        .reduce(
            (sum: number, el: MoneyItem): number => sum + el.price,
            0)
    const budget = totalIncome - totalExpense

    return (
        <BudgetStyle>
            <h1>Total Budget</h1>
            <div className="total">${budget}</div>
        </BudgetStyle>
    );
}

export default BudgetTotal;