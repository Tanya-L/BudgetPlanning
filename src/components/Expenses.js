import React from 'react';

function Expenses({totalExpense}) {
    return (
        <header>
            <h1>Expense Tracker</h1>
            <div className="total-expense">${totalExpense}</div>
        </header>
    );
}

export default Expenses;