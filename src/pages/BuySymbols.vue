<template>
    <MyInput v-bind:value="symbolName" @input="symbolName = $event.target.value" placeholder="акция" style="margin-right: 10px"/>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" style="margin-right: 20px"/> 
    <MyButton @click="buySymbol">Купить</MyButton>
    <MyButton @click="sellSymbol">Продать</MyButton>
    <MyButton @click="getPrice">Узнать цену</MyButton>
    <div>
        <Symbol v-for="i in symbols" :code="i.code" :amount="i.amount"/>
    </div>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Symbol from "@/components/Symbol"
import axios from "axios"

export default {
    components: {
        MyInput, MyButton, Symbol,
    },
    data() {
        return {
            symbolName: "",
            amount: 0,
            symbols: []
        }
    },
    methods: {
        async fetchSymbols() {
            const resp = await axios.get("/symbols/get-my-symbols")
            this.symbols = resp.data
        },
        async buySymbol() {
            if (this.amount === "") {
                alert("Можно вводить только число")
                return
            }
            const amount = Number(this.amount)
            const symbolName = this.symbolName
            if (amount <= 0) {
                alert("Можно брать только положительные числа")
                return
            }
            const resp = await axios.post(`/symbols/buy-symbol?symbol=${symbolName}&amount=${amount}`)
            await this.fetchSymbols()
        },
        async sellSymbol() {
            if (this.amount === "") {
                alert("Можно вводить только число")
                return
            }
            const amount = Number(this.amount)
            const symbolName = this.symbolName
            if (amount <= 0) {
                alert("Можно продавать только положительные числа")
                return
            }
            const resp = await axios.post(`/symbols/sell-symbol?symbol=${symbolName}&amount=${amount}`)
            await this.fetchSymbols()
        },
        async getPrice() {
            if (this.amount === "") {
                alert("Можно вводить только число")
                return
            }
            const amount = Number(this.amount)
            const symbolName = this.symbolName
            if (amount <= 0) {
                alert("Можно брать только положительные числа")
                return
            }
            const resp = await axios.get(`/symbols/get-price?symbol=${symbolName}`)
            alert(Number(resp.data) * amount)
        }
    },
    async mounted() {
        await this.fetchSymbols()
    }
}
</script>
<style scoped>
p {
    font-size: 30px;
    font-family: "Gill Sans", sans-serif;
}
</style>
