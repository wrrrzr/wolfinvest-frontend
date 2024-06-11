<template>
    <MyForm>
        <MyInput v-bind:value="oldPassword" @input="oldPassword = $event.target.value" placeholder="старый пароль"/>
        <MyInput v-bind:value="newPassword" @input="newPassword = $event.target.value" placeholder="новый пароль"/>
        <MyInput v-bind:value="confirmPassword" @input="confirmPassword = $event.target.value" placeholder="подтвердите пароль"/>
        <MyButton @click="changePassword">Сменить пароль</MyButton>
    </MyForm>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import MyForm from "@/components/UI/MyForm"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton, MyForm,
    },
    data() {
        return {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
    },
    methods: {
        async changePassword() {
            if (this.confirmPassword !== this.newPassword) {
                alert("Пароли не совпадают!")
                return
            }
            try {
                await api.post("/settings/change-password",
                    {
                        old_password: this.oldPassword,
                        new_password: this.newPassword,
                    }
                )
                this.$router.push("/")
            } catch (e) {
                if (e.response.status === 400) {
                    alert("Неверный пароль")
                }
            }
        }
    },
}
</script>
