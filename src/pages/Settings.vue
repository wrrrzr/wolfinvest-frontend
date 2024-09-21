<template>
    <Form>
        <ChangeLang/>
        <BtnLink :to="'/change-password'">{{ $t('change_password') }}</BtnLink>
        <Button @click="finishTutorial">{{ $t('finish_tutorial') }}</Button>
        <Button @click="resetTutorial">{{ $t('reset_tutorial') }}</Button>
        <Button @click="exitFromAccount">{{ $t('log_out') }}</Button>
    </Form>
</template>
<script>
import { mapState, mapMutations } from "vuex"
import Button from "@/components/UI/Button"
import Form from "@/components/UI/Form"
import ChangeLang from "@/components/ChangeLang"
import BtnLink from "@/components/BtnLink"
import { helperState } from "@/helper"

export default {
    components: {
        Button, Form, ChangeLang, BtnLink,
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
