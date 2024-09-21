<template>
    <Form>
    <Input v-bind:value="username" @input="username = $event.target.value" style="margin-bottom: 10px" :placeholder="$t('username')"/>
        <Input v-bind:value="password" @input="password = $event.target.value" style="margin-bottom: 20px" :placeholder="$t('password')" type="password"/>
        <Button @click="login" style="margin-bottom: 10px">{{ $t('log_in') }}</Button>
        <Button @click="register">{{ $t('register') }}</Button>
    </Form>
</template>
<script>
import { mapMutations } from "vuex"
import Button from "@/components/UI/Button"
import Input from "@/components/UI/Input"
import Form from "@/components/UI/Form"
import { helperState } from "@/helper"
import api from "@/api"

export default {
    components: {
        Button, Input, Form,
    },
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        ...mapMutations({
            setHelperState: "helper/setHelperState",
        }),
        async register() {
            try {
                await api.post("/auth/reg", { username: this.username, password: this.password })
                await this.login()
            } catch (e) {
                if (e.response.status === 400) {
                    alert(this.$t('alerts.username_taken'))
                }
            }
        },
        async login() {
            try {
                const resp = await api.post("/auth/auth", { username: this.username, password: this.password })
                this.$cookies.set("token", resp.data)
                this.$router.push('/')
            } catch(e) {
                if (e.response.status === 400) {
                    alert(this.$t('alerts.incorrect_login_data'))
                }
            }
        }
    },
    beforeMount() {
        if (this.$cookies.isKey("token")) {
            this.$router.push('/')
        }
        this.setHelperState(helperState.auth)
    }
}
</script>
