<template>
    <MyCard @click="goToHackUser">
        <p>id: {{ user.id }}</p>
        <p>username: {{ user.username }}</p>
        <p>balance: {{ floatToCash(user.balance) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyCard,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        goToHackUser() {
            this.$router.push(`/hack-user/${this.user.id}`)
        },
        floatToCash,
    },
}
</script>
