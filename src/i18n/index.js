import { createI18n } from "vue-i18n"
import en from "./en"
import ru from "./ru"

const defaultLocale = "ru"

export default createI18n({
    legacy: false,
    fallbackLocale: defaultLocale,
    locale: localStorage.getItem('lang') || defaultLocale,
    messages: {
        en: en,
        ru: ru,
    },
})
