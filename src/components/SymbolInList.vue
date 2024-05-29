<template>
    <MyCard @click="goToBuySymbol">
        <p style="user-select: none">{{ name }} ({{ code }})</p>
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
    },
    methods: {
        goToBuySymbol() {
            this.$router.push(`/symbol/${this.code}`)
        }
    }
}
</script>
