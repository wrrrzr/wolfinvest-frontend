<template>
    <MyCard @click="goToBuySymbol">
        <p style="user-select: none">{{ name }} ({{ code }})</p>
        <p style="user-select: none">цена: {{ price.toFixed(2) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"

export default {
    components: {
        MyCard,
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
        }
    }
}
</script>
