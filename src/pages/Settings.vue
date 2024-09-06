<template>
    <MyForm>
        <ChangeLang/>
        <BtnLink :to="'/change-password'">{{ $t('change_password') }}</BtnLink>
        <MyButton @click="finishTutorial">{{ $t('finish_tutorial') }}</MyButton>
        <MyButton @click="resetTutorial">{{ $t('reset_tutorial') }}</MyButton>
        <MyButton @click="exitFromAccount">{{ $t('log_out') }}</MyButton>
    </MyForm>
</template>
<script>
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import ChangeLang from "@/components/ChangeLang"
import BtnLink from "@/components/BtnLink"
import { finishTutorial, resetTutorial } from "@/helper"

export default {
    components: {
        MyButton, MyForm, ChangeLang, BtnLink,
    },
    methods: {
        exitFromAccount() {
            this.$cookies.remove("token")
            this.$router.go("/")
        },
        finishTutorial,
        resetTutorial,
    },
}
</script>
