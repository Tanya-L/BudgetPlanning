import React, {FormEvent, useRef, useState} from 'react';
import {MoneyItem} from "../MoneyItem";

interface ExpenseFormProps {
    addExpense: (m: MoneyItem) => any;
}

function ExpenseForm({addExpense}: ExpenseFormProps) {
    const descInputbox = useRef<HTMLInputElement>(null);
    const dateInputbox = useRef<HTMLInputElement>(null);
    const priceInputbox = useRef<HTMLInputElement>(null);

    const AddExpense = (e: FormEvent) => {
        e.preventDefault();
        if (descInputbox.current === null || dateInputbox.current === null || priceInputbox.current === null) {
            return;
        }

        let d = (dateInputbox.current as any).value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);

        addExpense({
            description: (descInputbox.current as any).value,
            price: parseFloat((priceInputbox.current as any).value),
            date: newD
        });

        (descInputbox.current as any).value = "";
        (priceInputbox.current as any).value = null;
        (dateInputbox.current as any).value = null;
    }

    return (
        <form className="expense-form" onSubmit={AddExpense}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Expense Description..."
                       ref={descInputbox}/>
                <input type="number" name="price" id="price" placeholder="Price..."
                       ref={priceInputbox}/>
                <input type="date" name="date" id="date" placeholder="Expense date..."
                       value="date" ref={dateInputbox}/>

                <input type="submit" value="Add Expense"/>
            </div>
        </form>
    )
}

export default ExpenseForm;