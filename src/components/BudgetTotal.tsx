import React from 'react';

interface BudgetProps {
    budget: number
}

function BudgetTotal({budget}: BudgetProps) {
    return (
        <header>
            <h1>Total Budget</h1>
            <div className="total">${budget}</div>
        </header>
    );
}

export default BudgetTotal;