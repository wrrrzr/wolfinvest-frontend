<template>
    <div class="container">
        <div class="change-password">
            <MyInput v-bind:value="old_password" @input="old_password = $event.target.value" placeholder="старый пароль"/>
            <MyInput v-bind:value="new_password" @input="new_password = $event.target.value" placeholder="новый пароль"/>
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
            old_password: "",
            new_password: "",
        }
    },
    methods: {
        async changePassword() {
            try {
                await api.post("/settings/change-password",
                    {
                        old_password: this.old_password,
                        new_password: this.new_password,
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
