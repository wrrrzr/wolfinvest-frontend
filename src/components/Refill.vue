<template>
    <MyCard>
        <b>количество: {{ floatToCash(amount) }}</b>
        <br>
        <b>{{ date }}</b>
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
    methods: {
        floatToCash,
    },
}
</script>
<style scoped>
.container {
  display: grid;
}
</style>
