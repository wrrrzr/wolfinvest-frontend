<template>
    <MyForm>
    <MyCard>
        <p>{{ currencyName }}</p>
        <p>{{ $t('price_buy') }}: {{ floatToCash(price) }}</p>
    </MyCard>
    <p style="font-size: 1.5em; margin: 5px">{{ $t('avaible_to_buy') }} {{ avaibleToBuy }}</p>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" :placeholder="$t('amount')" type="number"/>
    <MyButton @click="buyCurrency">{{ $t('buy') }}</MyButton>
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
            balance: state => state.user.balance,
        }),
        currencyName() {
            return this.$t('currencies.' + this.currency)
        },
        avaibleToBuy() {
            return Math.floor(this.balance / this.price)
        },
    },
    methods: {
        ...mapActions({
            fetchSymbolsWithoutCache: "mySymbols/fetchSymbolsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
            fetchUser: "user/fetchUser",
            fetchCurrenciesWithoutCache: "currencies/fetchCurrenciesWithoutCache",
        }),
        async buyCurrency() {
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
                await api.post(`currency/buy-currency?currency=${currency}&amount=${amount}`)
            } catch (e) {
                alert(this.$t('alerts.not_enough_money_to_buy'))
                return
            }
            if (amount === 1) {
                alert(this.$t('alerts.currency_purchased'))
            } else {
                alert(this.$t('alerts.currencies_purchased'))
            }
            this.fetchCurrenciesWithoutCache()
            this.fetchUserWithoutCache()
        },
        floatToCash,
    },
    mounted() {
        api.get(`currency/get-price?currency=${this.currency}`).then(resp => {
            this.price = resp.data
        })
        this.fetchUser()
        setTitle(this.$t('purchase_currency').replace("%name%", this.currencyName))
    }
}
</script>
