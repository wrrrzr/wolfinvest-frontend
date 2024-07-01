<template>
    <Link :to="'/symbol/' + code">
        <MyCard>
            <p style="user-select: none"><b>{{ name }}</b></p>
            <p style="user-select: none">{{ $t('amount') }}: {{ amount }}</p>
            <p style="user-select: none">{{ $t('price') }}: {{ floatToCash(priceOne * amount) }} ({{ floatToCash(priceOne) }})</p>
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
        code: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        priceOne: {
            type: Number,
            required: true,
        },
    },
    methods: {
        floatToCash,
    }
}
</script>
