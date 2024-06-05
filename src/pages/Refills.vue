<template>
    <div class="get-refill">
        <MyInput v-bind:value="amount" @input="amount = $event.target.value" placeholder="количество" type="number"/>
        <MyButton @click="takeRefill">Взять пополнение</MyButton>
    </div>
    <div>
        <Refill v-bind:value="refills" v-for="refill in refills" :amount="refill.amount" :time="refill.created_at"></Refill>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Refill from "@/components/Refill"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton, Refill,
    },
    data() {
        return {
            amount: NaN,
            refills: [],
        }
    },
    methods: {
        ...mapActions({
            fetchRefills: "refills/fetchRefills",
            fetchRefillsWithoutCache: "refills/fetchRefillsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
        }),
        ...mapGetters({
            getReverse: "refills/getReverse",
        }),
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
            const resp = await api.post(`/refills/take-refill?amount=${amount}`)
            await this.fetchRefillsWithoutCache()
            await this.fetchUserWithoutCache()
            this.refills = this.getReverse()
        },
    },
    async mounted() {
        await this.fetchRefills()
        this.refills = this.getReverse()
    }
}
</script>
<style scoped>
.get-refill {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
