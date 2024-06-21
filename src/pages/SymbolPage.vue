<template>
    <p v-if="notFound" style="font-size: 5em">{{ $t('symbol_not_found') }}</p>
    <div v-else>
    <p style="font-size: 2em">{{ $t('symbol') }} {{ $route.params.symbol }}</p>
    <b style="font-size: 2em">{{ $t('price') }} {{ floatToCash(price) }}</b>
    <div class="chart">
        <Chart v-if="symbolChartLoaded" :symbolChart="symbolChart"/>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
        <div style="display: grid; width: 100%">
            <div style="display: flex">
                <MyButton class="buy-button" @click="buySymbol">{{ $t('buy') }}</MyButton>
                <MyButton class="sell-button" @click="sellSymbol">{{ $t('sell') }}</MyButton>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Chart from "@/components/Chart"
import api from "@/api"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyInput, MyButton, Chart,
    },
    data() {
        return {
            amount: NaN,
            price: 0,
            symbol: this.$route.params.symbol,
            symbolChartLoaded: false,
            notFound: false,
        }
    },
    computed: {
        buySymbolFormat() { return `/symbol/${this.symbol}/buy` },
        sellSymbolFormat() { return `/symbol/${this.symbol}/sell` },
    },
    methods: {
        ...mapActions({
            fetchSymbolsWithoutCache: "mySymbols/fetchSymbolsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
        }),
        buySymbol() {
            this.$router.push(this.buySymbolFormat)
        },
        sellSymbol() {
            this.$router.push(this.sellSymbolFormat)
        },
        floatToCash,
    },
    async mounted() {
        try {
            const resp = await api.get(`symbols/get-price?symbol=${this.symbol}`)
            const resp2 = await api.get(`symbols/get-daily-history?symbol=${this.symbol}`) 
            this.symbolChart = resp2.data
            this.symbolChartLoaded = true
            this.price = parseFloat(resp.data.buy)
        } catch (e) {
            if (e.response.status === 404) {
                this.notFound = true
            }
        }
    }
} 
</script>
<style scoped>
@media (orientation: portrait) {
    .chart {
        height: 80vw;
    }
}
@media (orientation: landscape) {
    .chart {
        height: 25vw;
    }
}
.buy-button {
    margin-top: 0;
    margin-right: 0;
    width: 50%;
    background-color: #215f3d;
    color: white;
}
.buy-button:hover {
    background-color: #1c5833;
}
.sell-button {
    margin-top: 0;
    margin-left: 0;
    width: 50%;
    background-color: #512f6d;
    color: white;
}
.sell-button:hover {
    background-color: #4c2863;
}
</style>
