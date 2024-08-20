<template>
    <div v-if="noChanges" style="display: flex; justify-content: center; align-items: center">
        <p style="font-size: 2.5em; margin-top: 0">{{ $t('no_balance_changes') }}</p>
    </div>
    <div v-else>
        <MyCard v-for="change in changes">
            <p>{{ showText(change) }}</p>
            <p>{{ formatDate(change.created_at) }}</p>
        </MyCard>
    </div>
</template>
<script>
import {mapState, mapActions} from "vuex"
import MyCard from "@/components/UI/MyCard"
import {floatToCash} from "@/funcs"

export default {
    components: {
        MyCard,
    },
    computed: {
        ...mapState({
            changes: state => state.balanceHistory.data,
        }),
        noChanges() { return this.changes.length === 0},
    },
    methods: {
        ...mapActions({
            "fetchData": "balanceHistory/fetchData",
        }),
        formatDate(date) {
            return new Date(date).toLocaleString(this.$t('localeString'))
        },
        showText(change) {
            return this.$t(`reason.${change.reason}`).replace("%amount%", floatToCash(change.amount, change.ticker))
        },
    },
    mounted() {
        this.fetchData()
    },
}
</script>
