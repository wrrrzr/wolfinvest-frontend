<template>
    <Link>
        <div class="link">
            <slot></slot>
        </div>
    </Link>
</template>
<script>
import Link from "@/components/Link"

export default {
    components: {
        Link,
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

@media (hover: hover) {
    .link:hover {
        background-color: var(--ui-button-hover-background-color);
        cursor: pointer;
    }
}

@media (hover: none) {
    .link:active {
        background-color: var(--ui-button-hover-background-color);
    }
}
</style>
