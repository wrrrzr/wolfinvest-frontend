<template>
  <div class="topnav">
      <NavLink :to="root">{{ $t('navbar.home') }}</NavLink>
      <NavLink :to="buySymbols">{{ $t('navbar.symbols') }}</NavLink>
      <NavLink :to="refills">{{ $t('navbar.refills') }}</NavLink>
      <NavLink :to="settings">{{ $t('navbar.settings') }}</NavLink>
      <NavLink :to="balance_history">{{ $t('navbar.balance_history') }}</NavLink>
      <NavLink :to="about">{{ $t('navbar.about') }}</NavLink>
      <NavLink :to="admin" v-if="isAdmin()">{{ $t('navbar.admin') }}</NavLink>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import MyButton from "@/components/UI/MyButton"
import NavLink from "./NavLink"

export default {
    components: {
        MyButton, NavLink,
    },
    data() {
        return {
            root: "/",
            buySymbols: "/buy-symbols",
            refills: "/refills",
            settings: "/settings",
            balance_history: "/balance-history",
            about: "/about",
            admin: "/admin",
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
</style>
