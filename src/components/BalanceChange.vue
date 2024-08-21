<template>
    <MyCard>
        <p>{{ showText(change) }}</p>
        <p>{{ formatDate(change.created_at) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import {CurrencyReason, floatToCash} from "@/funcs"

export default {
    components: {
        MyCard,
    },
    props: {
        change: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatDate(date) {
            return new Date(date).toLocaleString(this.$t('localeString'))
        },
        showText(change) {
            let text = this.$t(`reason.${change.reason}`).replace("%amount%", floatToCash(change.amount, change.ticker))
            if (change.reason == CurrencyReason.buy_symbol || change.reason == CurrencyReason.sell_symbol) {
                if (change.additional_info.symbol_info !== undefined) {
                    text = text.replace("%symbol_ticker%", change.additional_info.symbol_info.symbol_ticker)
                    text = text.replace("%symbol_amount%", change.additional_info.symbol_info.symbol_amount)
                } else {
                    text = text.replace("%symbol_ticker%", "?")
                    text = text.replace("%symbol_amount%", "?")
                }
            }
            return text
        },
    }
}
</script>
