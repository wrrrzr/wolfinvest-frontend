<template>
    <div style="display: grid">
        <Link :to="'/hack-user/' + user.id">
            <Card>
                <p>{{ $t('id') }}: {{ user.id }}</p>
                <p>{{ $t('username') }}: {{ user.username }}</p>
            </Card>
        </Link>
    </div>
</template>
<script>
import Card from "@/components/UI/Card"
import Link from "@/components/Link"
import { floatToCash } from "@/funcs"

export default {
    components: {
        Card, Link,
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
