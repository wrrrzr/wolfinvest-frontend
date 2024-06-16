<template>
    <MyForm>
        <MyButton @click="changePassword">{{ $t('change_password') }}</MyButton>
        <MyButton @click="exitFromAccount">{{ $t('log_out') }}</MyButton>
    </MyForm>
</template>
<script>
import VueCookies from "vue-cookies"
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"

export default {
    components: {
        MyButton, MyForm,
    },
    methods: {
        changePassword() {
            this.$router.push("/change-password")
        },
        exitFromAccount() {
            VueCookies.remove("token")
            this.$router.go("/")
        }
    },
}
</script>
