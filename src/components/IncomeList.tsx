import React, {useContext} from 'react';
import IncomeItem from "./IncomeItem";
import {MoneyItem} from "../MoneyItem";
import {GlobalContext} from "../context/GlobalState";

// interface IncomeListProps {
//     allIncomeItems: MoneyItem[];
//     deleteIncome: (index: number) => void;
// }

function IncomeList() {
    const {incomes} = useContext(GlobalContext)

    const sortByDate = (a: MoneyItem, b: MoneyItem) => {
        return a.date > b.date ? 1 : (a.date < b.date ? -1 : 0);
    }

    return (
        <div className="list">
            {
                incomes
                    .sort(sortByDate)
                    .map((value, index) => (
                        <IncomeItem
                            key={index}
                            income={value}
                            index={index}
                        />
                    ))
            }
        </div>
    )
}

export default IncomeList;
