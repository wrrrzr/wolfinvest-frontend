<template>
    <MyForm>
        <ChangeLang/>
        <BtnLink :to="'/change-password'">{{ $t('change_password') }}</BtnLink>
        <MyButton @click="exitFromAccount">{{ $t('log_out') }}</MyButton>
    </MyForm>
</template>
<script>
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import ChangeLang from "@/components/ChangeLang"
import BtnLink from "@/components/BtnLink"

export default {
    components: {
        MyButton, MyForm, ChangeLang, BtnLink,
    },
    methods: {
        exitFromAccount() {
            this.$cookies.remove("token")
            this.$router.go("/")
        },
    },
}
</script>
