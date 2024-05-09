<template>
    <MyUser :id="id" :balance="balance" :username="username"></MyUser>
</template>
<script>
import MyUser from '@/components/MyUser'

export default {
    components: {
        MyUser,
    },
    data() {
        return {
            id: 1,
            balance: 0,
            username: "hello",
        }
    }
}
</script>
<style>
body {
  background-color: #515a5a;
}
</style>
