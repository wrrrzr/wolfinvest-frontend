<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  background-color: #212f3d;
  color: #808b96;
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
  background-color: #1c2833;
}
</style>
