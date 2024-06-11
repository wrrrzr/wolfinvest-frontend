<template>
    <div>
        <User v-for="user in allUsers" :user="user"/>
    </div>
</template>
<script>
import {mapActions, mapState} from "vuex"
import User from "@/components/admin/User"

export default {
    components: {
        User,
    },
    computed: {
        ...mapState({
            allUsers: state => state.admin.allUsers,
        }),
    },
    methods: {
        ...mapActions({
            "fetchAllUsers": "admin/fetchAllUsers",
        }),
    },
    async mounted() {
        await this.fetchAllUsers()
    }
}
</script>
