<template>
    <p v-if="notFound" style="font-size: 5em">Акция {{ $route.params.symbol }} не найдена</p>
    <div v-else>
    <p style="font-size: 2em">Акции компании {{ $route.params.symbol }}</p>
    <b style="font-size: 2em">Цена {{ floatToCash(price) }}</b>
    <div class="chart">
        <Chart v-if="symbolChartLoaded" :symbolChart="symbolChart"/>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
        <div style="display: grid; width: 100%">
            <MyInput style="margin-bottom: 0" v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" type="number"/>
            <div style="display: flex">
                <MyButton class="buy-button" @click="buySymbol">Купить</MyButton>
                <MyButton class="sell-button" @click="sellSymbol">Продать</MyButton>
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
    methods: {
        ...mapActions({
            fetchSymbolsWithoutCache: "mySymbols/fetchSymbolsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
        }),
        async buySymbol() {
            if (this.amount === "") {
                alert("Можно вводить только числа")
                return
            }
            const amount = Number(this.amount)
            const symbol = this.symbol
            if (amount <= 0) {
                alert("Можно брать только положительное количество акций")
                return
            }
            try {
                await api.post(`/symbols/buy-symbol?symbol=${symbol}&amount=${amount}`)
            } catch (e) {
                alert("Недостаточно денег для покупки")
                return
            }
            if (amount === 1) {
                alert("Акция куплена!")
            } else {
                alert("Акции куплены!")
            }
            await this.fetchSymbolsWithoutCache()
            await this.fetchUserWithoutCache()
        },
        async sellSymbol() {
            if (this.amount === "") {
                alert("Можно вводить только числа")
                return
            }
            const amount = Number(this.amount)
            const symbol = this.symbol
            if (amount <= 0) {
                alert("Можно брать только положительное количество акций")
                return
            }
            try {
                await api.post(`/symbols/sell-symbol?symbol=${symbol}&amount=${amount}`)
            } catch (e) {
                alert("Недостаточно акций чтобы продать")
                return
            }
            if (amount === 1) {
                alert("Акция продана!")
            } else {
                alert("Акции проданы!")
            }
            await this.fetchSymbolsWithoutCache()
            await this.fetchUserWithoutCache()
        },
        floatToCash,
    },
    async mounted() {
        try {
            const resp = await api.get(`symbols/get-price?symbol=${this.symbol}`)
            const resp2 = await api.get(`symbols/get-daily-history?symbol=${this.symbol}`) 
            this.symbolChart = resp2.data
            this.symbolChartLoaded = true
            this.price = parseFloat(resp.data)
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
}
.buy-button:hover {
    background-color: #1c5833;
}
.sell-button {
    margin-top: 0;
    margin-left: 0;
    width: 50%;
    background-color: #512f6d;
}
.sell-button:hover {
    background-color: #4c2863;
}
</style>
