import React from "react";
import {act, fireEvent, render, screen} from "@testing-library/react";
import ExpenseItem from "../components/ExpenseItem";
import {GlobalContext} from "../context/GlobalState";


function renderWithProvider(ui, props) {
    return render(
        <GlobalContext.Provider value={props}>
            {ui}
        </GlobalContext.Provider>
    )
}

test("Value is deleted when X is clicked", async () => {
    const testExpense = {id: 0, description: "test", price: 123.45, date: new Date()};
    let myDeleteExpense = jest.fn();
    const props = {deleteExpense: myDeleteExpense}

    renderWithProvider(<ExpenseItem expense={testExpense} index={1}/>, props);

    const buttonX = await screen.findByRole("button")
    act(() => {
        fireEvent.click(buttonX)
    })
    expect(myDeleteExpense).toBeCalled();
});

// test('Should identify if the ExpenseItem function was called or not', () => {
//     const ExpenseItem = jest.fn();
//     ExpenseItem();
//     expect(ExpenseItem).toHaveBeenCalledTimes(1);
// });
