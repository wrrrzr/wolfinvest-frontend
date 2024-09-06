<template>
    <div class="get-refill">
        <MyInput v-bind:value="amount" @input="amount = $event.target.value" :placeholder="$t('amount')" type="number"/>
        <MyButton @click="takeRefill">{{ $t('take_refill') }}</MyButton>
    </div>
    <div>
        <Refill v-bind:value="refills" v-for="refill in refills" :amount="refill.amount" :time="refill.created_at"></Refill>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapState, mapMutations } from "vuex"
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import Refill from "@/components/Refill"
import { helperState } from "@/helper"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton, Refill,
    },
    data() {
        return {
            amount: NaN,
        }
    },
    computed: {
        ...mapState({
            refills: state => state.refills.refills,
            state: state => state.helper.state,
        }),
    },
    methods: {
        ...mapActions({
            fetchRefills: "refills/fetchRefills",
            fetchRefillsWithoutCache: "refills/fetchRefillsWithoutCache",
            fetchUserWithoutCache: "user/fetchUserWithoutCache",
            fetchBalanceHistoryWithoutCache: "balanceHistory/fetchBalanceHistoryWithoutCache",
            fetchCurrenciesWithoutCache: "currencies/fetchCurrenciesWithoutCache",
        }),
        ...mapMutations({
            setHelperState: "helper/setHelperState",
        }),
        async takeRefill() {
            if (this.amount === "") {
                alert(this.$t('alerts.only_number'))
                return
            }
            const amount = Number(this.amount)
            if (amount <= 0) {
                alert(this.$t('alerts.only_positive_numbers'))
                return
            }
            const resp = await api.post(`/refills/take-refill?amount=${amount}`)
            this.fetchRefillsWithoutCache()
            this.fetchUserWithoutCache()
            this.fetchBalanceHistoryWithoutCache()
            this.fetchCurrenciesWithoutCache()
            if (this.state === helperState.selectRefill) {
                this.setHelperState(helperState.gotoSymbols)
            }
        },
    },
    mounted() {
        if (this.state === helperState.gotoRefills) {
            this.setHelperState(helperState.selectRefill)
        }
        this.fetchRefills()
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
