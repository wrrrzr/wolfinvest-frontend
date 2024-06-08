<template>
  <div class="topnav">
    <MyButton @click="$router.push('/')">Главная</MyButton>
    <MyButton @click="$router.push('/buy-symbols')">Купить акции</MyButton>
    <MyButton @click="$router.push('/refills')">Пополнения</MyButton>
    <MyButton @click="$router.push('/news')">Новости</MyButton>
    <MyButton @click="$router.push('/about')">О нас</MyButton>
  </div>
</template>
<script>
import MyButton from './UI/MyButton'

export default {
    components: {
        MyButton
    }
}
</script>
<style scoped>
.topnav {
  background-color: var(--ui-button-background-color);
  overflow: hidden;
  border-radius: 25px;
}

.topnav button {
  border-radius: 0px;
  margin: 0px;
}
</style>
