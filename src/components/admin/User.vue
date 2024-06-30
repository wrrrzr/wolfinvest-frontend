<template>
    <div style="display: grid">
        <Link :to="'/hack-user/' + user.id">
            <MyCard>
                <p>{{ $t('id') }}: {{ user.id }}</p>
                <p>{{ $t('username') }}: {{ user.username }}</p>
                <p>{{ $t('balance') }}: {{ floatToCash(user.balance) }}</p>
            </MyCard>
        </Link>
    </div>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import Link from "@/components/Link"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyCard, Link,
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        floatToCash,
    },
}
</script>
