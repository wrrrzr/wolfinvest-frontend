<template>
    <SButton @click="goToBuySymbol">
        <MyCard style="text-align: left;">
            <p style="user-select: none">{{ name }} ({{ code }})</p>
            <p style="user-select: none">{{ $t('price') }}: {{ floatToCash(price) }}</p>
        </MyCard>
    </SButton>
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
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        price: {
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
