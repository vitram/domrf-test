<template lang="pug">
.form-group
    span {{label}}
    input(:type="type" :value="modelValue" @input="updateValue")
</template>

<script>
export default {
    props: {
        modelValue: String,
        label: String,
        type: String
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}

</script>

<style lang="scss" scoped>
.form-group{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    margin-bottom: 25px;
    span{
        margin-bottom: 20px;
    }
    input {
        padding: 0.5rem;
        border-radius: $border-radius;
    }
}

</style>