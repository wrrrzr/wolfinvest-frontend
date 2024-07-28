<template>
    <MyForm>
    <MyCard>
        <p>{{ symbolName }}</p>
        <p>{{ $t('price_sell') }}: {{ floatToCash(price, currency) }}</p>
    </MyCard>
    <p style="font-size: 1.5em; margin: 5px">{{ $t('avaible_to_sell') }} {{ avaibleToSell }}</p>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" :placeholder="$t('amount')" type="number"/>
    <MyButton @click="sellSymbol">{{ $t('sell') }}</MyButton>
    </MyForm>
</template>
<script>
import { mapActions, mapState } from "vuex"
import MyCard from "@/components/UI/MyCard"
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import api from "@/api"
import { floatToCash, setTitle } from "@/funcs"

export default {
    components: {
        MyCard, MyInput, MyButton, MyForm,
    },
    data() {
        return {
            amount: NaN,
            price: 0,
            currency: "",
            symbol: this.$route.params.symbol,
            symbolName: "",
        }
    },
    computed: {
        ...mapState({
            symbols: state => state.mySymbols.symbols,
        }),
        avaibleToSell() {
            for (const el of this.symbols) {
                if (el.code === this.symbol) {
                    return el.amount
                }
            }
        },
    },
    methods: {
        ...mapActions({
            fetchSymbolsWithoutCache: "mySymbols/fetchSymbolsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
            fetchBalanceHistoryWithoutCache: "balanceHistory/fetchBalanceHistoryWithoutCache",
        }),
        async sellSymbol() {
            if (this.amount === "") {
                alert(this.$t('alerts.only_numbers'))
                return
            }
            const amount = Number(this.amount)
            const symbol = this.symbol
            if (amount <= 0) {
                alert(this.$t('alerts.only_positive_numbers'))
                return
            }
            try {
                await api.post(`/symbols/sell-symbol?symbol=${symbol}&amount=${amount}`)
            } catch (e) {
                alert(this.$t('alerts.not_enough_symbols_to_sell'))
                return
            }
            if (amount === 1) {
                alert(this.$t('alerts.symbol_sold'))
            } else {
                alert(this.$t('alerts.symbols_sold'))
            }
            await this.fetchSymbolsWithoutCache()
            await this.fetchUserWithoutCache()
            await this.fetchBalanceHistoryWithoutCache()
        },
        floatToCash,
    },
    async mounted() {
        const resp = await api.get(`symbols/get-symbol?symbol=${this.symbol}`)
        this.price = resp.data.price.sell
        this.symbolName = resp.data.name
        this.currency = resp.data.price.currency
        setTitle(this.$t('sale_symbol').replace("%name%", resp.data.name))
    }
}
</script>
