import React, {useCallback, useContext} from "react";
import {LoadingIcon} from "./LoadingIcon";
import {GlobalContext} from "../context/GlobalState";
import assert from "assert";

export interface CurrencyProps {
    url: string,
    currency: string,
    sek: number,
}

export default function Currency(props: CurrencyProps) {
    const {exchangeRates} = useContext(GlobalContext)

    const isLoading = exchangeRates === "no data" || exchangeRates === "loading"
    const isError = exchangeRates === "error"

    const getCurrencyRate = useCallback((rates, currency) => {
        if (typeof rates === 'string') {
            return 0.0;
        }
        return rates[currency] || 0.0;
    }, []);

    function value() {
        function round2(n: number): string {
            return (Math.round(n * 100) / 100).toFixed(2);
        }

        if (typeof exchangeRates === "object") {
            return round2(props.sek * getCurrencyRate(exchangeRates, props.currency)) + " " + props.currency;
        }
        return "?"
    }

    return (<div role="currency">
        {isError ? "Exchange rates loading error!" :
            (isLoading ? <LoadingIcon/> : value())
        }
        </div>)
}