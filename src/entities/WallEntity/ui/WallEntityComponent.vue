
<template lang="pug">
.wall_wrapper
    .wall__input
        BaseInput(type="number" label="Введите длину (в метрах)" v-model.number="wallHeight" class="wall__input_element")
        BaseInput(type="number" label="Введите ширину (в метрах)" v-model.number="wallWight")
    .wall_img
        img(src="../../../assets/plate.png")
        
</template>

<script>
import { BaseInput } from '@/shared/ui/BaseInput';
import { useWallStore } from '../model/walls';
    export default {
        components: { BaseInput },
        setup() {
            const store = useWallStore()
            return { store }
        },
        data() {
            return {
                wallHeight: 0,
                wallWight: 0
            }
        },
        watch: {
            wallHeight(){
                this.store.setWallH(this.wallHeight)
            },
            wallWight(){
                this.store.setWallW(this.wallWight)
            }
        }
    }
</script>

<style lang="scss" scoped>
.wall_wrapper{
        display: flex;
        flex-direction: column;
        .wall__input{
            margin-bottom: 30px;
            flex-basis: auto;
            max-width: 500px;

            &_element{
                margin-bottom: 20px;
            }
        }
        .wall_img{
            flex-basis: auto;
            img{
                max-height: 250px;
                width: auto;
            }
        }
}


@media (min-width: 768px) { 
        .wall_wrapper{
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            .wall__input{
                flex-basis: auto;
                width: 100%;
            }
            .wall_img{
                flex-basis: 1/2;
                img{
                    max-height: 300px;
                }
            }
    }
}
</style>