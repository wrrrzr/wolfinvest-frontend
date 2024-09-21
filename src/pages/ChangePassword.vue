<template>
    <Form>
        <Input v-bind:value="oldPassword" @input="oldPassword = $event.target.value" :placeholder="$t('old_password')"/>
        <Input v-bind:value="newPassword" @input="newPassword = $event.target.value" :placeholder="$t('new_password')"/>
        <Input v-bind:value="confirmPassword" @input="confirmPassword = $event.target.value" :placeholder="$t('confirm_password')"/>
        <Button @click="changePassword">{{ $t('change_password') }}</Button>
    </Form>
</template>
<script>
import Input from "@/components/UI/Input"
import Button from "@/components/UI/Button"
import Form from "@/components/UI/Form"
import api from "@/api"

export default {
    components: {
        Input, Button, Form,
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
                alert(this.$t('alerts.password_mismatch'))
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
                    alert(this.$t('alerts.incorrect_password'))
                }
            }
        }
    },
}
</script>
