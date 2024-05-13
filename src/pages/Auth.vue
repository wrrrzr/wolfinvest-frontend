<template>
<div class="login">
    <input v-bind:value="username" @input="username = $event.target.value" class="usernameinput" placeholder="username">
    <input v-bind:value="password" @input="password = $event.target.value" class="passinput" placeholder="password">
    <MyButton @click="login" style="margin-right: 60px">log in</MyButton>
    <MyButton @click="register">register</MyButton>
</div>
</template>
<script>
import MyButton from "@/components/UI/MyButton"
import axios from "axios"
import VueCookies from 'vue-cookies'

export default {
    components: {
        MyButton,
    },
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        async login() {
            try {
                await axios.post("http://127.0.0.1:8000/auth/reg", {
                    username: this.username, password: this.password,
                })
            } catch (e) {
                if (e.response.status == 400) {
                    alert("Данный юзернейм уже занят")
                    return
                }
            }
        },
        async register() {
            try {
                const resp = await axios.post("http://127.0.0.1:8000/auth/auth", {
                    username: this.username, password: this.password
                })
                VueCookies.set("token", resp.data)
                this.$router.push('/')
            } catch (e) {
                if (e.response.status == 400) {
                    alert("Неправильный юзернейм или пароль")
                    return
                }
            }
        },
    }
}
</script>
<style scoped>
.login {
    width: 325px;
    margin: auto;
    padding: 40px;
    background: #708090;
    border-radius: 25px;
    font-family: 'Helvetica';
    font-size: 15px;
}

.usernameinput {
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 17px;
    padding-left: 10px;
    font-size: 20px;
    margin-bottom: 10px;
}

.passinput {
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 17px;
    padding-left: 10px;
    font-size: 20px;
    margin-bottom: 20px;
}
</style>
