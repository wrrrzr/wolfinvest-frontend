<template>
    <MyButton @click="exitFromAccount">Выйти из аккаунта</MyButton>
</template>
<script>
import VueCookies from "vue-cookies"
import MyButton from "@/components/UI/MyButton"

export default {
    components: {
        MyButton,
    },
    methods: {
        exitFromAccount() {
            VueCookies.remove("token")
            this.$router.push("/")
        }
    },
}
</script>
