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
  margin: 0.2vw;
  border-radius: 15px;
}

.card:hover {
  background-color: #A0A0A0;
}

.container {
  display: flex;
}

.card * {
  margin-top: 0;
  margin-botton: 0;
}
</style>
