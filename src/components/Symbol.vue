<template>
    <div class="card">
        <div class="container">
            <h4><b>{{ code }}: {{ amount }}</b></h4>
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
    },
}
</script>
<style scoped>
.card {
  transition: 0.4s;
  background-color: #808080;
  font-size: 26px;
  font-family: 'Lucida Handwriting';
  margin: 25px;
  border-radius: 7px;
}

.card:hover {
  background-color: #A0A0A0;
}

.container {
  padding: 1px 16px;
}
</style>
