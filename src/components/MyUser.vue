<template>
    <MyCard>
        <p><b>{{ username }}</b></p>
        <p>id: {{ id }}</p>
        <p>баланс: {{ balance.toFixed(2) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import api from "@/api"

export default {
    components: {
        MyCard,
    },
    data() {
        return {
            id: 0,
            balance: 0,
            username: "",
        }
    },
    async mounted() {
        const resp = await api.get("/users/me")
        this.id = resp.data.id
        this.balance = resp.data.balance
        this.username = resp.data.username
    }
}
</script>
