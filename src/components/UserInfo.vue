<template>
    <MyCard style="text-align: center; font-size: 1.5em; font-family: sans-serif">
        <p><b>{{ username }}</b></p>
        <p>счёт: {{ floatToCash(balance) }}</p>
        <p>итого: {{ floatToCash(totalBalance) }}</p>
        <div style="display: inline-flex; justify-content: space-between; font-size: 0.8em">
            <p :class="isEarn ? 'earn' : 'notearn'">{{ floatToCash(totalEarn.absolute) }} · {{ totalEarn.percent.toFixed(2) }}%</p>
            <p style="font-size: 0.9em">за всё время</p>
        </div>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import { mapActions, mapState } from "vuex"
import { floatToCash } from "@/funcs"
import api from "@/api"

export default {
    components: {
        MyCard,
    },
    methods: {
        ...mapActions({
            fetchUser: "user/fetchUser",
            fetchRefills: "refills/fetchRefills",
            fetchSymbols: "mySymbols/fetchSymbols",
        }),
        floatToCash
    },
    computed: {
        ...mapState({
            id: state => state.user.id,
            balance: state => state.user.balance,
            username: state => state.user.username,
        }),
        totalBalance() {
            let sum = 0
            this.$store.state.mySymbols.symbols.forEach(
                (el) => {sum += el.price * el.amount}
            )
            return sum + this.balance
        },
        totalEarn() {
            let sum = 0
            this.$store.state.refills.refills.forEach(
                (el) => {sum += el.amount}
            )
            if (sum === 0 && this.totalBalance === 0) {
                return {"absolute": 0, "percent": 0}
            }
            return {
                "absolute": this.totalBalance - sum,
                "percent": this.totalBalance / sum * 100 - 100,
            }
        },
        isEarn() {
            return this.totalEarn.percent >= 0
        }
    },
    async mounted() {
        await this.fetchUser()
        await this.fetchRefills()
        await this.fetchSymbols()
    }
}
</script>
<style scoped>
.notearn {
    display: inline-flex;
    background-color: var(--page-user-notearn);
    border-radius: 17px;
    padding: 3px;
}
.earn {
    display: inline-flex;
    background-color: var(--page-user-earn);
    border-radius: 17px;
    padding: 3px;
}
</style>
