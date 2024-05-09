<template>
    <div class="card">
        <div class="container">
        <h4><b>{{ username }}</b></h4>
        <p>id: {{ id }}</p>
        <p>balance: {{ balance }}</p>
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #808080;
  width: 300px;
  font-size: 26px;
  font-family: 'Lucida Handwriting';
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
