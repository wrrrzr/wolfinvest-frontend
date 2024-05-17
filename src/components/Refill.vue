<template>
    <div class="div"><p>количество: {{ amount }}</p><p>дата получения: {{ time.toLocaleString("ru-RU") }}</p></div>
</template>
<script>
export default {
    props: {
        amount: {
            type: Number,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        },
    }
}
</script>
<style scoped>
.div {
    width: 50%;
    background-color: #708090;
    font-size: 20px;
}
</style>
