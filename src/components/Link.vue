<template>
    <router-link class="router">
        <slot></slot>
    </router-link>
</template>
<style scoped>
.router {
  text-decoration: none;
  color: var(--ui-button-color);
}
</style>
