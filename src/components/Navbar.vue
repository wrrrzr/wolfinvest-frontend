<template>
  <div class="topnav">
      <MyButton @click="$router.push('/')">{{ $t('navbar.home') }}</MyButton>
    <MyButton @click="$router.push('/buy-symbols')">{{ $t('navbar.symbols') }}</MyButton>
    <MyButton @click="$router.push('/refills')">{{ $t('navbar.refills') }}</MyButton>
    <MyButton @click="$router.push('/settings')">{{ $t('navbar.settings') }}</MyButton>
    <MyButton @click="$router.push('/about')">{{ $t('navbar.about') }}</MyButton>
    <MyButton v-if="isAdmin()" @click="$router.push('/admin')">{{ $t('navbar.admin') }}</MyButton>
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
