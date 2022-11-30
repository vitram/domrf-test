<template lang="pug">
.header_wrapper
    .logo
        router-link(to="/")
            img(src="../../../assets/dom-logo.svg")
    .links
        .link
            router-link(to="/calc")
                div <strong>Калькулятор</strong>
        
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header_wrapper{
    display: flex;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    prefix: 2rem;
    .link{
        margin-left: 20px;
        cursor: pointer;
        transition: color 0.5s ease;

        &:hover{
            color: $text-hover-color;
            transition: color 0.5s ease;
        }
    }
}
</style>