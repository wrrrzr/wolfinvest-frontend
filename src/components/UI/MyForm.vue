<template>
    <div class="container">
        <div class="form">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.form {
  padding: 25px;
  background: var(--ui-form-background);
  border-radius: 25px;
  font-family: 'Helvetica';
  font-size: 1em;
  display: inline-grid;
  margin-top: 15px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
