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
import styled from "styled-components";
import {GlobalProvider} from "./context/GlobalState";


// const GlobalStyle = createGlobalStyle`
//    html, body {
//     margin: 0;
//     padding: 0;
//     }
//   body {
//     background-color: #cccccc;
//     font-family: sans-serif;
//     font=size: 16px;
//     }
//     `;

const Wripper = styled.section`
    padding: 1em;
    background: white;
    }
    `;

function App() {

    // const [allIncomeItems, setAllIncomeItems] = useState<MoneyItem[]>([]);
    // const [allExpenseItems, setAllExpenseItems] = useState<MoneyItem[]>([]);
    // const [totalIncome, setTotalIncome] = useState<number>(0);
    // const [totalExpense, setTotalExpense] = useState<number>(0);
    // const [totalBudget, setTotalBudget] = useState<number>(0);
    //
    // useEffect(() => {
    //     setTotalIncome(allIncomeItems.reduce((sum: number, el: MoneyItem): number => sum + el.price, 0))
    // }, [allIncomeItems]);
    //
    // useEffect(() => {
    //     setTotalExpense(allExpenseItems.reduce((sum: number, el: MoneyItem): number => sum + el.price, 0))
    // }, [allExpenseItems]);
    //
    // useEffect(() => {
    //         setTotalBudget(totalIncome - totalExpense);
    //     },
    //     [totalIncome, totalExpense]);

    return (
        <GlobalProvider>
            <Wripper>
                <div className="App">
                    <h1 className="title">Simple budget planning</h1>
                    <IncomeTotal/>
                    <IncomeForm/>
                    <IncomeList/>

                    <ExpenseTotal/>
                    <ExpenseForm/>
                    <ExpenseList/>

                    <BudgetTotal/>
                </div>
            </Wripper>
        </GlobalProvider>
    );
}

export default App;
