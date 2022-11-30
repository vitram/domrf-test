<template lang="pug">
div
    button.btn
        slot
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.btn{
    background-color: $primary;
    border-radius: $border-radius;
    border: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    color: white;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &:hover{
        background-color: $deep-primary;
        transition: background-color 0.5s ease;
    }
}
</style>