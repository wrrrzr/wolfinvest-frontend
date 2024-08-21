import { useHead } from "@vueuse/head"

const currencyChars = {
    "USD": "$",
    "EUR": "€",
    "UAH": "₴",
    "RUB": "₽",
    "HKD": "HK$",
    "CNY": "¥",
    "JPY": "¥",
    "GBP": "£",
}

const currencyToChar = (currency) => {
    if (currencyChars[currency] === undefined)
        return "?"
    return currencyChars[currency]
}

export const floatToCash = (value, currency = "USD") => `${value.toFixed(2)}${currencyToChar(currency)}`
export const setTitle = (title) => {
    useHead({
        title: title,
    })
}

export const CurrencyReason = {
    "unknown_add": 1,
    "unknown_remove": 2,
    "buy": 3,
    "sell": 4,
    "buy_symbol": 5,
    "sell_symbol": 6,
    "taken_refill": 7,
}
