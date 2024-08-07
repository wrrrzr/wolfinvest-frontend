<template>
    <div class="list">
        <div style="margin: 10">
            <p style="font-size: 2em; margin-bottom: 0; margin-top: 0; margin-left: 10px">{{ title }}</p>
            <div style="display: inline-flex; flex-wrap: wrap; margin-top: 0">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>
<style scoped>
.list {
    display: inline-flex;
    background-color: #2d3137;
    border-radius: 10px;
    color: var(--ui-default-color);
    margin-left: 10px;
}
</style>
