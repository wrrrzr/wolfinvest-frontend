<template>
    <MyInput v-bind:value="symbolName" @input="symbolName = $event.target.value" placeholder="акция"/>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" type="number"/> 
    <MyButton @click="buySymbol">Купить</MyButton>
    <MyButton @click="sellSymbol">Продать</MyButton>
    <MyButton @click="getPrice">Узнать цену</MyButton>
    <ListSymbols/>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Symbol from "@/components/Symbol"
import ListSymbols from "@/components/ListSymbols"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton, Symbol, ListSymbols,
    },
    data() {
        return {
            symbolName: "",
            amount: 0,
        }
    },
    methods: {
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
            const resp = await api.post(`/symbols/buy-symbol?symbol=${symbolName}&amount=${amount}`)
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
            const resp = await api.post(`/symbols/sell-symbol?symbol=${symbolName}&amount=${amount}`)
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
            const resp = await api.get(`/symbols/get-price?symbol=${symbolName}`)
            alert(Number(resp.data) * amount)
        }
    },
}
</script>
<style scoped>
p {
    font-size: 2em;
    font-family: "Gill Sans", sans-serif;
}
</style>
