import React from "react";
import {act, fireEvent, render, screen} from "@testing-library/react";
import ExpenseForm from "../components/ExpenseForm";
import {GlobalContext} from "../context/GlobalState";

function renderWithProvider(ui, props) {
    return render(
        <GlobalContext.Provider value={props}>
            {ui}
        </GlobalContext.Provider>
    )
}

test('Expense form submission should call AddExpense', async () => {
    const myAddExpense = jest.fn()
    //     .mockImplementation((cb) => () => cb({test: 'test'}));

    // Draw component
    const props = {addExpense: myAddExpense}
    renderWithProvider(
        <ExpenseForm/>,
        props
    );
    let dateInput = await screen.findByRole("date-input");
    let submitButton = await screen.findByText("Add Expense");

    act(() => {
        fireEvent.change(dateInput, {target: {value: "2020-01-01"}})
        expect(dateInput.value).toBe("2020-01-01")

        fireEvent.submit(submitButton);
        // expect(dateInput.value).toBe("yyyy-mm-dd")
    })

    expect(myAddExpense).toBeCalled();
});

