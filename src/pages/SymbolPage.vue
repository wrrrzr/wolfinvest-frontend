<template>
    <div style="display: inline-grid">
        <MyInput v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" type="number"/>
        <div style="display: inline-flex">
            <MyButton style="margin-top: 0; margin-right: 0; width: 50%" @click="buySymbol">Купить</MyButton>
            <MyButton style="margin-top: 0; margin-left: 0; width: 50%" @click="sellSymbol">Продать</MyButton>
        </div>
    </div>
    <p style="font-size: 32px">{{ $route.params.symbol }}</p>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton
    },
    data() {
        return {
            amount: 0,
            symbol: this.$route.params.symbol,
        }
    },
    methods: {
        async buySymbol() {
            if (this.amount === "") {
                alert("Можно вводить только числа")
                return
            }
            const amount = Number(this.amount)
            if (amount <= 0) {
                alert("Можно брать только положительное количество акций")
                return
            }
            const resp = await api.post(`/symbols/buy-symbol?symbol=${this.symbol}&amount=${amount}`)
        },
        async sellSymbol() {
            if (this.amount === "") {
                alert("Можно вводить только числа")
                return
            }
            const amount = Number(this.amount)
            if (amount <= 0) {
                alert("Можно брать только положительное количество акций")
                return
            }
            const resp = await api.post(`/symbols/sell-symbol?symbol=${this.symbol}&amount=${amount}`)
        },
    }
} 
</script>
