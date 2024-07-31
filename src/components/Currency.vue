<template>
    <Link :to="'/currency/' + name">
        <MyCard>
            <div style="display: inline-flex">
                <div>
                    <p style="user-select: none"><b>{{ name }}</b></p>
                    <p style="user-select: none">{{ $t('amount') }}: {{ floatToCash(amount, name) }}</p>
                </div>
            </div>
        </MyCard>
    </Link>
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
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    methods: {
        floatToCash,
    }
}
</script>
