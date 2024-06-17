<template>
    <div style="display: grid">
        <SButton @click="goToHackUser">
            <MyCard>
                <p>{{ $t('id') }}: {{ user.id }}</p>
                <p>{{ $t('username') }}: {{ user.username }}</p>
                <p>{{ $t('balance') }}: {{ floatToCash(user.balance) }}</p>
            </MyCard>
        </SButton>
    </div>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import SButton from "@/components/semantic/SButton"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyCard, SButton,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        goToHackUser() {
            this.$router.push(`/hack-user/${this.user.id}`)
        },
        floatToCash,
    },
}
</script>
