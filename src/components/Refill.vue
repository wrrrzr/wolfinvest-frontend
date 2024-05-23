<template>
    <MyCard>
        <b>количество: {{ amount }}</b>
        <br>
        <b>{{ date }}</b>
    </MyCard>
</template>
<script>
import MyCard from "@/components/UI/MyCard"

export default {
    components: {
        MyCard,
    },
    props: {
        amount: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
    },
    computed: {
        date() {
            return new Date(this.time).toLocaleString("ru-RU")
        }
    },
}
</script>
<style scoped>
.container {
  display: grid;
}
</style>
