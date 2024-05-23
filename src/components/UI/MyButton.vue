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
  padding: 15px 5px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  font-family: monospace;
}

.btn:hover {
  background-color: #1c2833;
}
</style>
