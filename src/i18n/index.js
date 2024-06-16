import { createI18n } from "vue-i18n"
import en from "./en"
import ru from "./ru"

const defaultLocale = "en"

export default createI18n({
    legacy: false,
    fallbackLocale: defaultLocale,
    locale: window.navigator.language.slice(0, 2),
    messages: {
        en: en,
        ru: ru,
    },
})
