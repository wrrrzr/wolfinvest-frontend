<template>
    <MyUser :id="id" :balance="balance" :username="username"></MyUser>
    <ListSymbols/>
</template>
<script>
import MyUser from "@/components/MyUser"
import ListSymbols from "@/components/ListSymbols"
import axios from "axios"

export default {
    components: {
        MyUser, ListSymbols,
    },
    data() {
        return {
            id: 0,
            balance: 0,
            username: "",
        }
    },
    async mounted() {
        const resp = await axios.get("/users/me")
        this.id = resp.data.id
        this.balance = resp.data.balance
        this.username = resp.data.username
    }
}
</script>
