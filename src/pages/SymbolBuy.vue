<template>
    <MyForm>
    <MyCard>
        <p>{{ $route.params.symbol }}</p>
        <p>{{ $t('price_buy') }}: {{ floatToCash(price) }}</p>
    </MyCard>
    <p style="font-size: 1.5em; margin: 5px">{{ $t('avaible_to_buy') }} {{ avaibleToBuy }}</p>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" :placeholder="$t('amount')" type="number"/>
    <MyButton @click="buySymbol">{{ $t('buy') }}</MyButton>
    </MyForm>
</template>
<script>
import { mapActions, mapState } from "vuex"
import MyCard from "@/components/UI/MyCard"
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import api from "@/api"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyCard, MyInput, MyButton, MyForm,
    },
    data() {
        return {
            amount: NaN,
            price: 0,
            symbol: this.$route.params.symbol,
        }
    },
    computed: {
        ...mapState({
            balance: state => state.user.balance,
        }),
        avaibleToBuy() {
            return Math.floor(this.balance / this.price)
        },
    },
    methods: {
        ...mapActions({
            fetchSymbolsWithoutCache: "mySymbols/fetchSymbolsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
            fetchUser: "user/fetchUser",
            fetchBalanceHistoryWithoutCache: "balanceHistory/fetchBalanceHistoryWithoutCache",
        }),
        async buySymbol() {
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
                await api.post(`/symbols/buy-symbol?symbol=${symbol}&amount=${amount}`)
            } catch (e) {
                alert(this.$t('alerts.not_enough_money_to_buy'))
                return
            }
            if (amount === 1) {
                alert(this.$t('alerts.symbol_purchased'))
            } else {
                alert(this.$t('alerts.symbols_purchased'))
            }
            await this.fetchSymbolsWithoutCache()
            await this.fetchUserWithoutCache()
            await this.fetchBalanceHistoryWithoutCache()
        },
        floatToCash,
    },
    async mounted() {
        const resp = await api.get(`symbols/get-symbol?symbol=${this.symbol}`)
        this.price = resp.data.price.buy
        await this.fetchUser()
    }
}
</script>
