<template>
    <div v-if="noChanges" style="display: flex; justify-content: center; align-items: center">
        <p style="font-size: 2.5em; margin-top: 0">{{ $t('no_balance_changes') }}</p>
    </div>
    <div v-else>
        <BalanceChange v-for="change in this.changes" :change="change"/>
    </div>
</template>
<script>
import {mapState, mapActions} from "vuex"
import BalanceChange from "@/components/BalanceChange"

export default {
    components: {
        BalanceChange,
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
    },
    mounted() {
        this.fetchData()
    },
}
</script>
