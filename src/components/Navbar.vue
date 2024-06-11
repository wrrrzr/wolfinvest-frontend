<template>
  <div class="topnav">
    <MyButton @click="$router.push('/')">Главная</MyButton>
    <MyButton @click="$router.push('/buy-symbols')">Акции</MyButton>
    <MyButton @click="$router.push('/refills')">Пополнить</MyButton>
    <MyButton @click="$router.push('/settings')">Настройки</MyButton>
    <MyButton @click="$router.push('/about')">О нас</MyButton>
    <MyButton v-if="isAdmin()" @click="$router.push('/admin')">Админ</MyButton>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import MyButton from './UI/MyButton'

export default {
    components: {
        MyButton
    },
    methods: {
        ...mapGetters({
            'isAdmin': 'user/isAdmin',
        }),
    },
}
</script>
<style scoped>
.topnav {
  background-color: var(--ui-button-background-color);
  overflow: hidden;
  border-radius: 25px;
  margin-bottom: 5px;
}

.topnav button {
  border-radius: 0px;
  margin: 0px;
}
</style>
