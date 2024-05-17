<template>
    <MyInput v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" type="number" style="margin-right: 20px"/>
    <MyButton @click="takeRefill">Взять пополнение</MyButton>
    <div>
        <Refill v-bind:value="refills" v-for="refill in refills" :amount="refill.amount" :time="refill.created_at"></Refill>
    </div>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Refill from "@/components/Refill"
import axios from "axios"

export default {
    components: {
        MyInput, MyButton, Refill,
    },
    data() {
        return {
            amount: 0,
            refills: []
        }
    },
    methods: {
        async fetchRefills() {
            axios.defaults.withCredentials = true
            const resp = await axios.get("http://127.0.0.1:8000/refills/get-my-refills")
            this.refills = resp.data.reverse()
        },
        async takeRefill() {
            if (this.amount === "") {
                alert("Можно вводить только число")
                return
            }
            const amount = Number(this.amount)
            if (amount <= 0) {
                alert("Можно брать только положительные числа")
                return
            }
            axios.defaults.withCredentials = true
            const resp = await axios.post(`http://127.0.0.1:8000/refills/take-refill?amount=${amount}`)
            await this.fetchRefills()
        },
    },
    async mounted() {
        await this.fetchRefills()
    }
}
</script>
