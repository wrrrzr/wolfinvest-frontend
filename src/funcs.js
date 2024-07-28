import { useHead } from "@vueuse/head"

const currencyChars = {
    "USD": "$",
    "EUR": "€",
    "UAH": "₴",
    "RUB": "₽",
    "HKD": "HK$",
}

const currencyToChar = (currency) => {
    console.log(currency)
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
