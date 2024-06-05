<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
  transition: 0.4s;
  background-color: #808080;
  font-size: 1.7em;
  font-family: 'Lucida Handwriting';
  margin: 5px;
  border-radius: 17px;
  padding: 5px;
}

.card:hover {
  background-color: #A0A0A0;
}

.card * {
  margin: 0;
}
</style>
