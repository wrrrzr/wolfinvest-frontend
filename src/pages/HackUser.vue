<template>
    <MyForm>
        <div>
            <MyInput v-bind:value="newPassword" @input="newPassword = $event.target.value" :placeholder="$t('password')"/>
            <MyButton @click="setPassword">{{ $t('set_password') }}</MyButton>
        </div>
        <MyButton @click="deleteUser" class="red-button">{{ $t('delete') }}!!!</MyButton>
    </MyForm>
</template>
<script>
import {mapActions} from "vuex"
import MyForm from "@/components/UI/MyForm"
import MyButton from "@/components/UI/MyButton"
import MyInput from "@/components/UI/MyInput"
import api from "@/api"

export default {
    components: {
        MyForm, MyButton, MyInput,
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
