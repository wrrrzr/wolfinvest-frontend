import { useHead } from "@vueuse/head"

export const floatToCash = (value) => `${value.toFixed(2)}$`
export const setTitle = (title) => {
    useHead({
        title: title,
    })
}
