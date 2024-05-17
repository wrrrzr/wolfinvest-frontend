<template>
    <MyUser :id="id" :balance="balance" :username="username" v-if="!isLoading"></MyUser>
</template>
<script>
import MyUser from '@/components/MyUser'
import axios from 'axios'

export default {
    components: {
        MyUser,
    },
    data() {
        return {
            id: 0,
            balance: 0,
            username: "",
            isLoading: true,
        }
    },
    async mounted() {
        const resp = await axios.get("/users/me")
        this.id = resp.data.id
        this.balance = resp.data.balance
        this.username = resp.data.username
        this.isLoading = false
    }
}
</script>
