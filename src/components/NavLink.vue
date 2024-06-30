<template>
    <router-link :to="link" class="router">
        <div class="link">
            <slot></slot>
        </div>
    </router-link>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            required: true,
        }
    }
}
</script>
<style scoped>
.link {
  background-color: var(--ui-button-background-color);
  color: var(--ui-button-color);
  border: none;
  padding: 14px;
  text-align: center;
  display: inline-block;
  font-size: 1.6em;
  font-family: monospace;
  border-radius: 0px;
  margin: 0px;
}

.link:hover {
  background-color: var(--ui-button-hover-background-color);
  cursor: pointer;
}

.router {
  text-decoration: none;
  color: var(--ui-button-color);
}
</style>
