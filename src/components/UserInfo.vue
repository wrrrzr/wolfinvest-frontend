<template>
    <MyCard style="text-align: center; font-size: 1.7em">
        <p><b>{{ username }}</b></p>
        <p>баланс: {{ balance.toFixed(2) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import { mapActions, mapState } from "vuex"
import api from "@/api"

export default {
    components: {
        MyCard,
    },
    methods: {
        ...mapActions({
            fetchUser: "user/fetchUser",
        })
    },
    computed: {
        ...mapState({
            id: state => state.user.id,
            balance: state => state.user.balance,
            username: state => state.user.username,
        })
    },
    async mounted() {
        await this.fetchUser()
    }
}
</script>
