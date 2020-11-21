import {MoneyItem} from "../MoneyItem";

export interface CurrencyExchangeMap {[k: string]: number}

export interface BooksState {
    incomes: MoneyItem[],
    deleteIncome?: (id: string) => void,
    addIncome?: (item: MoneyItem) => void,

    expenses: MoneyItem[],
    deleteExpense?: (id: string) => void,
    addExpense?: (item: MoneyItem) => void

    exchangeRates: CurrencyExchangeMap | "no data" | string,
}