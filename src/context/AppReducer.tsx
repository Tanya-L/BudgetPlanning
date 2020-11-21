import {BooksState} from "./BooksState";
import {MoneyItem} from "../MoneyItem";

interface AppReducerAction {
    payload: string | MoneyItem,
    type: "ADD_INCOME" | "DELETE_INCOME" | "ADD_EXPENSE" | "DELETE_EXPENSE" | "SET_EXCHANGE_RATES"
}

export default function myExpenseAppReducer(state: BooksState, action: any) {
    function filterNotSameId() {
        return (item: MoneyItem) => item.id !== action.payload;
    }

    switch (action.type) {
        case 'DELETE_INCOME':
            return {
                ...state,
                incomes: state.incomes.filter(filterNotSameId())
            }
        case 'ADD_INCOME':
            return {
                ...state,
                incomes: [action.payload, ...state.incomes]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(filterNotSameId())
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        case  'SET_EXCHANGE_RATES':
            return {
                ...state,
                exchangeRates: action.payload
            }
        default:
            return state;
    }
}