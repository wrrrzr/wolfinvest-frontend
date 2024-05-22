<template>
    <div class="div"><b>количество: {{ amount }}</b><br><b>{{ date }}</b></div>
</template>
<script>
export default {
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
.div {
    background-color: #808080;
    font-size: 1.7em;
    font-family: system-ui;
    margin: 50px;
    padding: 10px 1em;
}
</style>
