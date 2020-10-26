import React from 'react';

interface IncomesProps {
    totalIncome: number;
}

function IncomeTotal({totalIncome}: IncomesProps) {
    return (
        <header>
            <h1>Income Tracker</h1>
            <div className="total-income">${totalIncome}</div>
        </header>
    );
}

export default IncomeTotal;