<template>
    <p v-if="notFound" style="font-size: 5em">{{ $t('symbol_not_found') }}</p>
    <div v-else>
    <div style="display: flex; justify-content: center; align-items: center">
    <Card style="display: inline-grid">
        <div style="display: flex">
            <SymbolIcon :ticker="symbol" :name="symbolName"/>
            <div>
                <p style="margin-bottom: 0; font-size: 1.5em">{{ $t('symbol') }} {{ symbolName }}</p>
                <p style="margin-top: 0; font-size: 1.5em">{{ $t('price') }} {{ floatToCash(price, currency) }}</p>
            </div>
        </div>
    </Card>
    </div>
    <Panel>
    <Button @click="m5">{{ $t('history_intervals.1d') }}</Button>
    <Button @click="h1">{{ $t('history_intervals.1wk') }}</Button>
    <Button @click="d1">{{ $t('history_intervals.1mo') }}</Button>
    <Button @click="wk1">{{ $t('history_intervals.3mo') }}</Button>
    <Button @click="mo1">{{ $t('history_intervals.1y') }}</Button>
    <Button @click="mo3">{{ $t('history_intervals.alltime') }}</Button>
    </Panel>
    <div class="chart">
        <Chart ref="chart"/>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
        <div style="display: grid; width: 100%">
            <div style="display: flex">
                <Button class="buy-button" @click="buySymbol">{{ $t('buy') }}</Button>
                <Button class="sell-button" @click="sellSymbol">{{ $t('sell') }}</Button>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import Input from "@/components/UI/Input"
import Button from "@/components/UI/Button"
import Panel from "@/components/UI/Panel"
import Card from "@/components/UI/Card"
import Chart from "@/components/Chart"
import SymbolIcon from "@/components/SymbolIcon"
import api from "@/api"
import { floatToCash, setTitle } from "@/funcs"

export default {
    components: {
        Input, Button, Panel, Chart, Card, SymbolIcon,
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
        async getSymbolsActions() {
            if (!this.$cookies.isKey("token"))
                return []
            return (await api.get(`symbols_actions/get-my-symbols-actions?symbol=${this.symbol}`)).data
        }
    },
    async mounted() {
        try {
            const resp = await api.get(`symbols/get-symbol?symbol=${this.symbol}`)
            this.price = parseFloat(resp.data.price.buy)
            this.currency = resp.data.price.currency
            this.symbolName = resp.data.name
            setTitle(resp.data.name)
            this.symbolChart = resp.data
        } catch (e) {
            if (e.response.status === 404) {
                this.notFound = true
            }
        }
        const resp2 = await api.get(`symbols/get-history?interval=${this.interval}&symbol=${this.symbol}`)
        const resp3 = await this.getSymbolsActions(this.symbol)
        this.$refs.chart.updateData(this.interval, resp2.data, resp3)
    },
    watch: {
        async interval(newInterval) {
            const resp = await api.get(`symbols/get-history?interval=${this.interval}&symbol=${this.symbol}`) 
            const resp2 = await this.getSymbolsActions(this.symbol)
            this.symbolChart = resp.data
            this.$refs.chart.updateData(this.interval, resp.data, resp2)
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
