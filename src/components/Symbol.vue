<template>
    <MyCard @click="goToBuySymbol">
        <p style="user-select: none"><b>{{ code }}</b></p>
        <p style="user-select: none">{{ $t('amount') }}: {{ amount }}</p>
        <p style="user-select: none">{{ $t('price') }}: {{ floatToCash(priceOne * amount) }} ({{ floatToCash(priceOne) }})</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"
import { floatToCash } from "@/funcs"

export default {
    components: {
        MyCard,
    },
    props: {
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
        goToBuySymbol() {
            this.$router.push(`/symbol/${this.code}`)
        },
        floatToCash,
    }
}
</script>
