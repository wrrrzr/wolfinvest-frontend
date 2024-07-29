<template>
    <div v-if="!loaded" style="display: flex; justify-content: center; align-items: center;">
        <p style="font-size: 3em">{{ $t('symbols_loading') }}</p>
    </div>
    <div v-else class="list">
        <Symbol v-for="i in symbols" :name="i.name" :code="i.code" :amount="i.amount" :priceOne="i.price.buy" :earn="i.earn" :currency="i.price.currency"/>
        <Currency v-for="(k, v) in currencies" :name="v" :amount="k"/>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
import Symbol from "@/components/Symbol"
import Currency from "@/components/Currency"
import api from "@/api"

export default {
    components: {
        Symbol, Currency,
    },
    data() {
        return {
            loaded: false,
        }
    },
    computed: {
        ...mapState({
            symbols: state => state.mySymbols.symbols,
            currencies: state => state.currencies.currencies,
        }),
    },
    methods: {
        ...mapActions({
            fetchSymbols: "mySymbols/fetchSymbols",
            fetchCurrencies: "currencies/fetchCurrencies",
        })
    },
    async mounted() {
        await this.fetchSymbols()
        await this.fetchCurrencies()
        console.log(this.currencies)
        this.loaded = true
    }
}
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #2d3137;
  border-radius: 17px;
}
</style>
