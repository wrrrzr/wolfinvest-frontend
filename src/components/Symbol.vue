<template>
    <MyCard @click="goToBuySymbol">
        <p style="user-select: none"><b>{{ code }}</b></p>
        <p style="user-select: none">количество: {{ amount }}</p>
        <p style="user-select: none">цена: {{ (priceOne * amount).toFixed(2) }} ({{ priceOne.toFixed(2) }})</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"

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
        }
    }
}
</script>
