import React, {FormEvent, useRef} from 'react';
import {MoneyItem} from "../MoneyItem";

interface IncomeFormProps {
    addIncome: (m: MoneyItem) => any;
}

function IncomeForm({addIncome}: IncomeFormProps) {
    const descInputbox = useRef<HTMLInputElement>(null);
    const dateInputbox = useRef<HTMLInputElement>(null);
    const priceInputbox = useRef<HTMLInputElement>(null);

    const AddIncome = (e: FormEvent) => {
        e.preventDefault();
        if (descInputbox.current === null || dateInputbox.current === null || priceInputbox.current === null) {
            return;
        }

        let d = (dateInputbox.current as any).value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);

        addIncome({
            description: (descInputbox.current as any).value,
            price: parseFloat((priceInputbox.current as any).value),
            date: newD
        });

        (descInputbox.current as any).value = "";
        (priceInputbox.current as any).value = null;
        (dateInputbox.current as any).value = null;
    }

    return (
        <form className="form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Income Description"
                       ref={descInputbox}/>
                <input type="number" name="price" id="price" placeholder="Price"
                       ref={priceInputbox}/>
                <input type="date" name="date" id="date" placeholder="Income date"
                       ref={dateInputbox}/>

                <input type="submit" value="Add Income"/>
            </div>
        </form>
    )
}

export default IncomeForm;