<template>
    <div class="container">
        <div class="change-password">
            <MyInput v-bind:value="oldPassword" @input="oldPassword = $event.target.value" placeholder="старый пароль"/>
            <MyInput v-bind:value="newPassword" @input="newPassword = $event.target.value" placeholder="новый пароль"/>
            <MyInput v-bind:value="confirmPassword" @input="confirmPassword = $event.target.value" placeholder="подтвердите пароль"/>
            <MyButton @click="changePassword">Сменить пароль</MyButton>
        </div>
    </div>
</template>
<script>
import MyInput from "@/components/UI/MyInput"
import MyButton from "@/components/UI/MyButton"
import api from "@/api"

export default {
    components: {
        MyInput, MyButton,
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
<style scoped>
.change-password {
  padding: 25px;
  background: var(--page-change-password-background);
  border-radius: 25px;
  font-family: 'Helvetica';
  font-size: 1em;
  display: inline-grid;
  margin-top: 15px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
