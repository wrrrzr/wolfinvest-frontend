<template>
    <MyForm>
        <ChangeLang/>
        <MyButton @click="changePassword">{{ $t('change_password') }}</MyButton>
        <MyButton @click="exitFromAccount">{{ $t('log_out') }}</MyButton>
    </MyForm>
</template>
<script>
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import ChangeLang from "@/components/ChangeLang"

export default {
    components: {
        MyButton, MyForm, ChangeLang,
    },
    methods: {
        changePassword() {
            this.$router.push("/change-password")
        },
        exitFromAccount() {
            this.$cookies.remove("token")
            this.$router.go("/")
        },
    },
}
</script>
