<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
  transition: 0.4s;
  color: var(--ui-card-color);
  background-color: var(--ui-card-background-color);
  font-size: 1.7em;
  font-family: 'Lucida Handwriting';
  margin: 5px;
  border-radius: 17px;
  padding: 5px;
}

.card:hover {
  background-color: var(--ui-card-hover-background-color);
}

.card * {
  margin: 0;
}
</style>
