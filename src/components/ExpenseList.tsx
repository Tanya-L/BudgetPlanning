import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import {MoneyItem} from "../MoneyItem";
import {GlobalContext} from "../context/GlobalState";

// interface ExpenseListProps {
//     allExpenseItems: MoneyItem[];
//     deleteExpense: (index: number) => void;
// }

function ExpenseList() {
    const {expenses} = useContext(GlobalContext)

    const sortByDate = (a: MoneyItem, b: MoneyItem) => {
        return a.date > b.date ? 1 : (a.date < b.date ? -1 : 0);
    }

    return (
        <div className="list">
            {
                expenses
                    .sort(sortByDate)
                    .map((value, index) => (
                        <ExpenseItem
                            key={index}
                            expense={value}
                            index={index}
                        />
                    ))
            }
        </div>
    )
}

export default ExpenseList;
