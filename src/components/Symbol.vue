<template>
    <MyCard>
        <p><b>{{ code }}</b></p>
        <p>количество: {{ amount }}</p>
        <p>цена: {{ priceOne.toFixed(2) }}</p>
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
}
</script>
