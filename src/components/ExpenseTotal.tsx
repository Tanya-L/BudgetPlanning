import React from 'react';

interface ExpensesProps {
    totalExpense: number
}

function ExpenseTotal({totalExpense}: ExpensesProps) {
    return (
        <header>
            <h1>Expense Tracker</h1>
            <div className="total-expense">${totalExpense}</div>
        </header>
    );
}

export default ExpenseTotal;