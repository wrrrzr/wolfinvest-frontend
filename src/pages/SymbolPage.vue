<template>
    <p style="font-size: 2em">Акции компании {{ this.$route.params.symbol }}</p>
    <b style="font-size: 2em">Цена {{ floatToCash(price) }}</b>
    <div class="chart">
        <Chart/>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
        <div style="display: grid; width: 100%">
            <MyInput v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" type="number"/>
            <div style="display: flex">
                <MyButton style="margin-top: 0; margin-right: 0; width: 50%" @click="buySymbol">Купить</MyButton>
                <MyButton style="margin-top: 0; margin-left: 0; width: 50%" @click="sellSymbol">Продать</MyButton>
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
        const resp = await api.get(`symbols/get-price?symbol=${this.symbol}`)
        this.price = parseFloat(resp.data)
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
</style>
