import React from 'react';
import IncomeItem from "./IncomeItem";
import {MoneyItem} from "../MoneyItem";

interface IncomeListProps {
    allIncomeItems: MoneyItem[];
    deleteIncome: (index: number) => void;
}

function IncomeList({allIncomeItems, deleteIncome}: IncomeListProps) {
    const sortByDate = (a: MoneyItem, b: MoneyItem) => {
        return a.date > b.date ? 1 : (a.date < b.date ? -1 : 0);
    }

    return (
        <div className="list">
            {
                allIncomeItems
                    .sort(sortByDate)
                    .map((value, index) => (
                        <IncomeItem
                            key={index}
                            income={value}
                            index={index}
                            deleteIncome={deleteIncome}
                        />
                    ))
            }
        </div>
    )
}

export default IncomeList;
