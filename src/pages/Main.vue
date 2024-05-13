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
        axios.defaults.withCredentials = true
        const resp = await axios.get("http://127.0.0.1:8000/users/me")
        this.id = resp.data.id
        this.balance = resp.data.balance
        this.username = resp.data.username
        this.isLoading = false
    }
}
</script>
