import * as React from 'react';
import Currency from "../components/Currency";
import {GlobalContext} from "../context/GlobalState";
import {render, screen, act} from "@testing-library/react";

function renderWithProvider(ui, props) {
    return render(
        <GlobalContext.Provider value={props}>
            {ui}
        </GlobalContext.Provider>
    )
}

test("Currency displays 2 decimal digits", async () => {
    const props = {exchangeRates: {"usd": 1000.0}}
    renderWithProvider(<Currency url={""} currency={"usd"} sek={1}/>,
        props)

    const currencyDiv = await screen.findByRole("currency")
    await act(() => {
        expect(currencyDiv).toBeDefined()
        expect(currencyDiv).toContainHTML("1000.00 usd")
    })
})