<template>
    <MyCard>
        <p><b>{{ username }}</b></p>
        <p>id: {{ id }}</p>
        <p>баланс: {{ balance.toFixed(2) }}</p>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"

export default {
    components: {
        MyCard,
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
        balance: {
            type: Number,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
}
</script>
