<template>
    <MyCard>
        <p><b>{{ username }}</b></p>
        <p>id: {{ id }}</p>
        <p>баланс: {{ balance.toFixed(2) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import { mapActions } from "vuex"
import api from "@/api"

export default {
    components: {
        MyCard,
    },
    data() {
        return this.$store.state.user
    },
    methods: {
        ...mapActions({
            fetchUser: "user/fetchUser",
        })
    },
    async mounted() {
        await this.fetchUser()
        /*const resp = await api.get("/users/me")
        this.id = resp.data.id
        this.balance = resp.data.balance
        this.username = resp.data.username*/
    }
}
</script>
