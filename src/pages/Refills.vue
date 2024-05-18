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
            axios.get("/refills/get-my-refills").then(resp => {
                this.refills = resp.data.reverse()
            })
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
            const resp = await axios.post(`/refills/take-refill?amount=${amount}`)
            await this.fetchRefills()
        },
    },
    async mounted() {
        await this.fetchRefills()
    }
}
</script>
