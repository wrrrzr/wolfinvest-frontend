<template>
    <p v-if="notFound" style="font-size: 5em">{{ $t('symbol_not_found') }}</p>
    <div v-else>
    <p style="font-size: 2em">{{ $t('symbol') }} {{ symbolName }}</p>
    <b style="font-size: 2em">{{ $t('price') }} {{ floatToCash(price) }}</b>
    <MyPanel>
    <MyButton @click="m5">{{ $t('history_intervals.5m') }}</MyButton>
    <MyButton @click="h1">{{ $t('history_intervals.1h') }}</MyButton>
    <MyButton @click="d1">{{ $t('history_intervals.1d') }}</MyButton>
    <MyButton @click="wk1">{{ $t('history_intervals.1wk') }}</MyButton>
    <MyButton @click="mo1">{{ $t('history_intervals.1mo') }}</MyButton>
    <MyButton @click="mo3">{{ $t('history_intervals.3mo') }}</MyButton>
    </MyPanel>
    <div class="chart">
        <Chart ref="chart" v-if="symbolChartLoaded" :interval="interval" :symbolsData="symbolChart"/>
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
import Chart from "@/components/Chart"
import api from "@/api"
import { floatToCash, setTitle } from "@/funcs"

export default {
    components: {
        MyInput, MyButton, MyPanel, Chart,
    },
    data() {
        return {
            amount: NaN,
            price: 0,
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
            this.symbolName = resp.data.name
            setTitle(resp.data.name)
            const resp2 = await api.get(`symbols/get-history?interval=${this.interval}&symbol=${this.symbol}`) 
            this.symbolChart = resp2.data
            this.symbolChartLoaded = true
        } catch (e) {
            if (e.response.status === 404) {
                this.notFound = true
            }
        }
    },
    watch: {
        async interval(newInterval) {
            const resp = await api.get(`symbols/get-history?interval=${this.interval}&symbol=${this.symbol}`) 
            this.symbolChart = resp.data
            this.$refs.chart.updateData(this.interval, resp.data)
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
