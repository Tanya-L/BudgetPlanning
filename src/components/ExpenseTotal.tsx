import React from 'react';

interface ExpensesProps {
    totalExpense: number
}

function ExpenseTotal({totalExpense}: ExpensesProps) {
    return (
        <header>
            <h1>Expense </h1>
            <div className="total">${totalExpense}</div>
        </header>
    );
}

export default ExpenseTotal;