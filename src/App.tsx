import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import IncomeTotal from './components/IncomeTotal'
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import BudgetTotal from "./components/BudgetTotal";
import {GlobalProvider} from "./context/GlobalState";
import styled from "styled-components";
import {CurrencyExchangeMap} from "./context/BooksState";


export const WrapperStyle: any = styled.section`
    padding: 1em;
    background: white;
    }
    `;

export const API_URL = "https://api.exchangeratesapi.io/latest?base=SEK";

interface ApiResponse {
    rates: CurrencyExchangeMap,
    base: string,
    date: string,
}

function App() {
    const [exchangeRates, setExchangeRates] = useState<object | string>("no data")
    const [currentTime30, setCurrentTime30] = useState<number>(0)

    function loadDataFromServer(_t: number) {
        fetch(API_URL)
            .then(res => res.json())
            .then(
                (data: ApiResponse) => {
                    setExchangeRates(data.rates);
                },
                (error: any) => {
                    console.log(error)
                    setExchangeRates("error")
                }
            );
    }

    useEffect(() => {
        const id = setInterval(() => {
            // This should increase by 1 every 30 minutes (1800 sec)
            let roundedTime = Math.round(new Date().getTime() / (1800 * 1000));
            setCurrentTime30(roundedTime);
        }, 3000);
        return () => clearInterval(id);
    }, [])
    // This should be called every 30 minutes
    useMemo(() => loadDataFromServer(currentTime30), [currentTime30]);

    return (
        <GlobalProvider exchangeRates={exchangeRates}>
            <WrapperStyle>
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
            </WrapperStyle>
        </GlobalProvider>
    );
}

export default App;
