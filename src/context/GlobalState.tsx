import React, {createContext, useReducer} from "react";
import {BooksState} from "./BooksState";
import myExpenseAppReducer from "./AppReducer";
import {MoneyItem} from "../MoneyItem";

// Initial state
const initialState: BooksState = {
    expenses: [],
    incomes: [],
    exchangeRates: "no data"
}

// Create context
export const GlobalContext = createContext<BooksState>(initialState);

// Provider component
// @ts-ignore
export const GlobalProvider = ({children, exchangeRates}) => {
    const [
        {expenses, incomes},
        dispatch
    ] = useReducer(myExpenseAppReducer, initialState);

    // Actions
    function deleteIncome(id: string) {
        dispatch({
            type: 'DELETE_INCOME',
            payload: id
        });
    }

    function addIncome(item: MoneyItem) {
        dispatch({
            type: 'ADD_INCOME',
            payload: item
        });
    }

    function deleteExpense(id: string) {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        });
    }

    function addExpense(item: MoneyItem) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: item
        });
    }

    return (<GlobalContext.Provider value={{
        expenses,
        deleteExpense,
        addExpense,

        incomes,
        deleteIncome,
        addIncome,

        exchangeRates
    }}>
        {children}
    </GlobalContext.Provider>);
}