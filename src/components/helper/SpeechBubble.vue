<template>
    <div class="bubble">
        <slot></slot>
    </div>
</template>
<style scoped>
.bubble {
    transition: 0.4s;
    color: var(--ui-card-color);
    background: #dddddd;
    font-size: 1.5em;
    font-family: 'Lucida Handwriting';
    border-radius: 30px;
    margin: 5px;
    padding: 10px;
    white-space: pre-line;
}

.bubble * {
    margin: 0;
}
</style>
