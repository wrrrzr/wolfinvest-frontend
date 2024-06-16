<template>
    <MyForm>
    <MyInput v-bind:value="username" @input="username = $event.target.value" style="margin-bottom: 10px" :placeholder="$t('username')"/>
        <MyInput v-bind:value="password" @input="password = $event.target.value" style="margin-bottom: 20px" :placeholder="$t('password')" type="password"/>
        <MyButton @click="login" style="margin-bottom: 10px">{{ $t('log_in') }}</MyButton>
        <MyButton @click="register">{{ $t('register') }}</MyButton>
    </MyForm>
</template>
<script>
import MyButton from "@/components/UI/MyButton"
import MyInput from "@/components/UI/MyInput"
import MyForm from "@/components/UI/MyForm"
import api from "@/api"
import VueCookies from 'vue-cookies'

export default {
    components: {
        MyButton, MyInput, MyForm,
    },
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
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
                VueCookies.set("token", resp.data)
                this.$router.push('/')
            } catch(e) {
                if (e.response.status === 400) {
                    alert(this.$t('alerts.incorrect_login_data'))
                }
            }
        }
    },
    beforeMount() {
        if (VueCookies.isKey("token")) {
            this.$router.push('/')
        }
    }
}
</script>
