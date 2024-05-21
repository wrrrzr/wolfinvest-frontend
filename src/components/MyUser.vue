<template>
    <div class="card">
        <div class="container">
        <h4><b>{{ username }}</b></h4>
        <p>id: {{ id }}</p>
        <p>баланс: {{ balance.toFixed(2) }}</p>
        </div>
    </div>
</template>
<script>
export default {
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
<style scoped>
.card {
  background-color: #808080;
  width: 300px;
  font-size: 26px;
  font-family: 'Lucida Handwriting';
  border-radius: 15px;
}

.container {
  padding: 2px 16px;
}
</style>
