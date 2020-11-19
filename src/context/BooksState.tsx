import {MoneyItem} from "../MoneyItem";

export interface BooksState {
    incomes: MoneyItem[],
    expenses: MoneyItem[],
    deleteIncome?: (id: string) => void,
    addIncome?: (item: MoneyItem) => void,
    deleteExpense?: (id: string) => void,
    addExpense?: (item: MoneyItem) => void,
}