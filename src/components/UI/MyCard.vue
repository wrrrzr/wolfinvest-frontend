<template>
    <div class="container">
        <div class="card">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.card {
  transition: 0.4s;
  background-color: #808080;
  font-size: 24px;
  font-family: 'Lucida Handwriting';
  margin: 1%;
  border-radius: 15px;
}

.card:hover {
  background-color: #A0A0A0;
}

.container {
  padding: 1px, 16px;
  display: flex;
}

.card * {
  margin: 1%;
}
</style>
