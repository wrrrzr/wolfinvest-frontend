<template>
    <p v-if="notFound" style="font-size: 5em">{{ $t('symbol_not_found') }}</p>
    <div v-else>
    <div style="display: flex; justify-content: center; align-items: center">
    <MyCard style="display: inline-grid">
        <div style="display: flex">
            <SymbolIcon :ticker="symbol" :name="symbolName"/>
            <div>
                <p style="margin-bottom: 0; font-size: 1.5em">{{ $t('symbol') }} {{ symbolName }}</p>
                <p style="margin-top: 0; font-size: 1.5em">{{ $t('price') }} {{ floatToCash(price, currency) }}</p>
            </div>
        </div>
    </MyCard>
    </div>
    <MyPanel>
    <MyButton @click="m5">{{ $t('history_intervals.1d') }}</MyButton>
    <MyButton @click="h1">{{ $t('history_intervals.1wk') }}</MyButton>
    <MyButton @click="d1">{{ $t('history_intervals.1mo') }}</MyButton>
    <MyButton @click="wk1">{{ $t('history_intervals.3mo') }}</MyButton>
    <MyButton @click="mo1">{{ $t('history_intervals.1y') }}</MyButton>
    <MyButton @click="mo3">{{ $t('history_intervals.alltime') }}</MyButton>
    </MyPanel>
    <div class="chart">
        <Chart ref="chart"/>
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
import MyPanel from "@/components/UI/MyPanel"
import MyCard from "@/components/UI/MyCard"
import Chart from "@/components/Chart"
import SymbolIcon from "@/components/SymbolIcon"
import api from "@/api"
import { floatToCash, setTitle } from "@/funcs"

export default {
    components: {
        MyInput, MyButton, MyPanel, Chart, MyCard, SymbolIcon,
    },
    data() {
        return {
            amount: NaN,
            price: 0,
            currency: "",
            symbol: this.$route.params.symbol,
            symbolChartLoaded: false,
            notFound: false,
            interval: 1,
            symbolName: "",
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
        m5() { this.interval = 1 },
        h1() { this.interval = 2 },
        d1() { this.interval = 3 },
        wk1() { this.interval = 4 },
        mo1() { this.interval = 5 },
        mo3() { this.interval = 6 },
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
            const resp = await api.get(`symbols/get-symbol?symbol=${this.symbol}`)
            this.price = parseFloat(resp.data.price.buy)
            this.currency = resp.data.price.currency
            this.symbolName = resp.data.name
            setTitle(resp.data.name)
            const resp2 = await api.get(`symbols/get-history?interval=${this.interval}&symbol=${this.symbol}`) 
            const resp3 = await api.get(`symbols_actions/get-my-symbols-actions?symbol=${this.symbol}`)
            this.symbolChart = resp.data
            this.$refs.chart.updateData(this.interval, resp2.data, resp3.data)
        } catch (e) {
            console.log(e)
            if (e.response.status === 404) {
                this.notFound = true
            }
        }
    },
    watch: {
        async interval(newInterval) {
            const resp = await api.get(`symbols/get-history?interval=${this.interval}&symbol=${this.symbol}`) 
            const resp2 = await api.get(`symbols_actions/get-my-symbols-actions?symbol=${this.symbol}`)
            this.symbolChart = resp.data
            this.$refs.chart.updateData(this.interval, resp.data, resp2.data)
        },
    },
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
