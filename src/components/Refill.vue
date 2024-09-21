<template>
    <Card>
        <b>{{ $t('amount') }}: {{ floatToCash(amount) }}</b>
        <br>
        <b>{{ date }}</b>
    </Card>
</template>
<script>
import Card from "@/components/UI/Card"
import { floatToCash } from "@/funcs"

export default {
    components: {
        Card,
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
            return new Date(this.time).toLocaleString(this.$t('localeString'))
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
