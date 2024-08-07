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
