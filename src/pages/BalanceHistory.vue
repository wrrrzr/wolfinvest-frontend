<template>
    <div>
        <MyCard v-for="change in changes">
            <p>{{ showText(change.reason, change.amount) }}</p>
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
    },
    methods: {
        ...mapActions({
            "fetchData": "balanceHistory/fetchData",
        }),
        formatDate(date) {
            return new Date(date).toLocaleString(this.$t('localeString'))
        },
        showText(reason, amount) {
            return this.$t(`reason.${reason}`).replace("%amount%", floatToCash(amount))
        },
    },
    async mounted() {
        await this.fetchData()
    },
}
</script>
