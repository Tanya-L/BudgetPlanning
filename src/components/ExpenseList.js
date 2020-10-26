import React from 'react';
import ExpenseItems from './ExpenseItems';

function ExpenseList({ expense, setExpense }) {

    const removeExpense = i => {
        let temp = expense.filter((v, index) => index != i);
        setExpense(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="expense-list">
            {
                expense.sort(sortByDate).map((value, index) => (
                    <ExpenseItems
                        key={index}
                        income={value}
                        index={index}
                        removeExpense={removeExpense}
                    />
                ))
            }
        </div>
    )
}

export default ExpenseList;