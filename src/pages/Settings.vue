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
import { mapState, mapMutations } from "vuex"
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import ChangeLang from "@/components/ChangeLang"
import BtnLink from "@/components/BtnLink"
import { helperState } from "@/helper"

export default {
    components: {
        MyButton, MyForm, ChangeLang, BtnLink,
    },
    computed: {
        ...mapState({
            state: state => state.helper.state,
        }),
    },
    methods: {
        ...mapMutations({
            setHelperState: "helper/setHelperState",
        }),
        exitFromAccount() {
            this.$cookies.remove("token")
            this.$router.go("/")
        },
        finishTutorial() {
            this.setHelperState(helperState.end)
        },
        resetTutorial() {
            this.setHelperState(helperState.auth)
        },
    },
}
</script>
