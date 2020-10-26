import React from 'react';

interface IncomesProps {
    totalIncome: number;
}

function IncomeTotal({totalIncome}: IncomesProps) {
    return (
        <header>
            <h1>Income </h1>
            <div className="total">${totalIncome}</div>
        </header>
    );
}

export default IncomeTotal;