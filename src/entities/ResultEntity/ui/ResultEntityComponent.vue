
<template lang="pug">
template(v-if="store.getResult.plateCount && store.getResult.wallMass")
    p Количество требуемых ПГП для выкладки стены с учётом проёмов: {{ store.getResult.plateCount}}
    p Общий вес стены: {{ store.getResult.wallMass }} кг
template(v-else)
    p Нажмите на кнопку рассчитать результат
</template>

<script>
import { useResultStore } from '../model/result';
    export default {
        setup(){
            const store = useResultStore()
            return {store}
        },
    }
</script>

<style lang="scss" scoped>

</style>