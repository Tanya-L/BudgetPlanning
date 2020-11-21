import React, {FormEvent, useContext, useRef} from 'react';
import {createUniqueId, MoneyItem} from "../MoneyItem";
import styled from "styled-components";
import {GlobalContext} from "../context/GlobalState";

// interface IncomeFormProps {
//     addIncome: (m: MoneyItem) => any;
// }

const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 10px;
    cursor: pointer;
    background-color: green;
    background-size: 200%;
    color: black;
    font-weight: 600;
    text-transform: uppercase;
`;

function IncomeForm() {
    const {addIncome} = useContext(GlobalContext)

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

        if (addIncome) {
            addIncome({
                id: createUniqueId(),
                description: (descInputbox.current as any).value,
                price: parseFloat((priceInputbox.current as any).value),
                date: newD
            });
        }

        (descInputbox.current as any).value = "";
        (priceInputbox.current as any).value = null;
        (dateInputbox.current as any).value = null;
    }

    return (
        <form className="form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Income Description in SEK"
                       ref={descInputbox}/>
                <input type="number" name="price" id="price" placeholder="Price"
                       ref={priceInputbox}/>
                <input type="date" name="date" id="date" placeholder="Income date"
                       ref={dateInputbox}/>

                <Button type="submit" value="Add Income">Add Income</Button>
            </div>
        </form>
    )
}

export default IncomeForm;