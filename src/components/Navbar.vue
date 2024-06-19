<template>
  <div class="topnav">
      <router-link :to="root"><MyButton>{{ $t('navbar.home') }}</MyButton></router-link>
      <router-link :to="buySymbols"><MyButton>{{ $t('navbar.symbols') }}</MyButton></router-link>
      <router-link :to="refills"><MyButton>{{ $t('navbar.refills') }}</MyButton></router-link>
      <router-link :to="settings"><MyButton>{{ $t('navbar.settings') }}</MyButton></router-link>
      <router-link :to="about"><MyButton>{{ $t('navbar.about') }}</MyButton></router-link>
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
    data() {
        return {
            root: "/",
            buySymbols: "/buy-symbols",
            refills: "/refills",
            settings: "/settings",
            about: "/about",
        }
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
