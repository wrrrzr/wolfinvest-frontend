<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  background-color: var(--ui-button-background-color);
  color: var(--ui-button-color);
  border: none;
  border-radius: 17px;
  padding: 14px;
  text-align: center;
  display: inline-block;
  font-size: 1.6em;
  font-family: monospace;
  margin: 5px;
}

.btn:hover {
  background-color: var(--ui-button-hover-background-color);
}
</style>
