<template>
    <div style="display: inline-grid">
        <MyButton @click="changePassword">Сменить пароль</MyButton>
        <MyButton @click="exitFromAccount">Выйти из аккаунта</MyButton>
    </div>
</template>
<script>
import VueCookies from "vue-cookies"
import MyButton from "@/components/UI/MyButton"

export default {
    components: {
        MyButton,
    },
    methods: {
        changePassword() {
            this.$router.push("/change-password")
        },
        exitFromAccount() {
            VueCookies.remove("token")
            this.$router.push("/")
        }
    },
}
</script>
