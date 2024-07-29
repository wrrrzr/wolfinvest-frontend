<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
  transition: 0.4s;
  color: var(--ui-card-color);
  background: linear-gradient(228deg, #757575, #aaaaaa);
  font-size: 1.7em;
  font-family: 'Lucida Handwriting';
  margin: 5px;
  border-radius: 17px;
  padding: 5px;
}

.card:hover {
  background: linear-gradient(228deg, #909090, #aaaaaa);
}

.card * {
  margin: 0;
}
</style>
