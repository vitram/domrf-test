<template lang="pug">
.doorway__wrapper
    BaseInput.doorway__input(type="number" label="Введите высоту проема (в см)" v-model.number="doorwayHeight")
    BaseInput.doorway__input(type="number" label="Введите ширину проема (в см)" v-model.number="doorwayWeight")
    BaseButton(@click="addDoorway") Добавить
</template>

<script>

import { BaseInput } from '@/shared/ui/BaseInput';
import { BaseButton } from '@/shared/ui/BaseButton';
import { useDoorwayStore } from '../../model/doorways';


    export default {
        components: {BaseInput, BaseButton},
        setup() {
            const doorwayStore = useDoorwayStore()

            return { doorwayStore }
        },
        data() {
            return {
                doorwayHeight: 0,
                doorwayWeight: 0
            }
        },
        methods: {
            addDoorway() {
                console.log('In component')
                this.doorwayStore.addDoorway({id: null, height: this.doorwayHeight, width: this.doorwayWeight})
                this.doorwayHeight = 0
                this.doorwayWeight = 0
            },
        }
    }
</script>

<style lang="scss" scoped>
.doorway__wrapper{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .doorway__input{
        margin-right: 15px;
    }
}
</style>