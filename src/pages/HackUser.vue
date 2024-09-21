<template>
    <Form>
        <div>
            <Input v-bind:value="newPassword" @input="newPassword = $event.target.value" :placeholder="$t('password')"/>
            <Button @click="setPassword">{{ $t('set_password') }}</Button>
        </div>
        <Button @click="deleteUser" class="red-button">{{ $t('delete') }}!!!</Button>
    </Form>
</template>
<script>
import {mapActions} from "vuex"
import Form from "@/components/UI/Form"
import Button from "@/components/UI/Button"
import Input from "@/components/UI/Input"
import api from "@/api"

export default {
    components: {
        Form, Button, Input,
    },
    data() {
        return {
            newPassword: "",
        }
    },
    methods: {
        ...mapActions({
            "fetchAllUsersWithoutCache": "admin/fetchAllUsersWithoutCache",
        }),
        async setPassword() {
            await api.post("/admin/change-user-password", { target: this.$route.params.id, new_password: this.newPassword })
            await this.fetchAllUsersWithoutCache()
            alert(this.$t('alerts.password_is_set'))
        },
        async deleteUser() {
            await api.delete(`/admin/delete-user?target=${this.$route.params.id}`)
            await this.fetchAllUsersWithoutCache()
            alert(this.$t('alerts.user_is_deleted'))
        },
    },
}
</script>
<style scoped>
.red-button {
  background-color: #512f3d;
}
.red-button:hover {
  background-color: #411f2d;
}
</style>
