<template>
    <MyForm>
    <MyCard>
        <p>{{ currencyName }}</p>
        <p>{{ $t('price_sell') }}: {{ floatToCash(price) }}</p>
    </MyCard>
    <p style="font-size: 1.5em; margin: 5px">{{ $t('avaible_to_sell') }} {{ avaibleToSell.toFixed() }}</p>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" :placeholder="$t('amount')" type="number"/>
    <MyButton @click="sellCurrency">{{ $t('sell') }}</MyButton>
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
            currency: this.$route.params.currency,
        }
    },
    computed: {
        ...mapState({
            currencies: state => state.currencies.currencies,
        }),
        currencyName() {
            return this.$t('currencies.' + this.currency)
        },
        avaibleToSell() {
            for (const el of this.currencies) {
                if (el.ticker === this.currency) {
                    return el.amount
                }
            }
        },
    },
    methods: {
        ...mapActions({
            fetchSymbolsWithoutCache: "mySymbols/fetchSymbolsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
            fetchCurrenciesWithoutCache: "currencies/fetchCurrenciesWithoutCache",
        }),
        async sellCurrency() {
            if (this.amount === "") {
                alert(this.$t('alerts.only_numbers'))
                return
            }
            const amount = Number(this.amount)
            const currency = this.currency
            if (amount <= 0) {
                alert(this.$t('alerts.only_positive_numbers'))
                return
            }
            try {
                await api.post(`currency/sell-currency?currency=${currency}&amount=${amount}`)
            } catch (e) {
                alert(this.$t('alerts.not_enough_currencies_to_sell'))
                return
            }
            if (amount === 1) {
                alert(this.$t('alerts.currency_sold'))
            } else {
                alert(this.$t('alerts.currencies_sold'))
            }
            this.fetchSymbolsWithoutCache()
            this.fetchUserWithoutCache()
            this.fetchCurrenciesWithoutCache()
        },
        floatToCash,
    },
    mounted() {
        api.get(`currency/get-price?currency=${this.currency}`).then(resp => {
            this.price = resp.data
        })
        setTitle(this.$t('sale_currency').replace("%name%", this.currencyName))
    }
}
</script>
