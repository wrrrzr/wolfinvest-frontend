<template>
    <div class="card">
        <div class="container">
            <p><b>{{ username }}</b></p>
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
  font-size: 24px;
  font-family: 'Lucida Handwriting';
  width: 300px;
  border-radius: 15px;
  margin: 1%;
}

.container {
  padding: 20px 16px;
}

.container p {
  margin: 3%;
}
</style>
