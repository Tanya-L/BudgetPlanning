import React from 'react';
import ExpenseItem from './ExpenseItem';
import {MoneyItem} from "../MoneyItem";

interface ExpenseListProps {
    allExpenseItems: MoneyItem[];
    deleteExpense: (index: number) => void;
}

function ExpenseList({allExpenseItems, deleteExpense}: ExpenseListProps) {
    const sortByDate = (a: MoneyItem, b: MoneyItem) => {
        return a.date > b.date ? 1 : (a.date < b.date ? -1 : 0);
    }

    return (
        <div className="expense-list">
            {
                allExpenseItems
                    .sort(sortByDate)
                    .map((value, index) => (
                        <ExpenseItem
                            key={index}
                            expense={value}
                            index={index}
                            deleteExpense={deleteExpense}
                        />
                    ))
            }
        </div>
    )
}

export default ExpenseList;
