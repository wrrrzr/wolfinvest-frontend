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
  background-color: #212f3d;
  overflow: hidden;
  border-radius: 25px;
  margin-bottom: 20px;
  padding: 0;
}
</style>
