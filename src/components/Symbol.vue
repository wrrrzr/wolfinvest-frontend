<template>
    <div class="card">
        <div class="container">
            <p><b>{{ code }}</b></p>
            <p>количество: {{ amount }}</p>
            <p>цена: {{ priceOne.toFixed(2) }}</p>
        </div>
    </div>
</template>
<script>
export default {
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
<style scoped>
.card {
  transition: 0.4s;
  background-color: #808080;
  font-size: 24px;
  font-family: 'Lucida Handwriting';
  margin: 1%;
}

.card:hover {
  background-color: #A0A0A0;
}

.container {
  padding: 1px 16px;
}

.card p {
  margin: 0.3em;
}
</style>
