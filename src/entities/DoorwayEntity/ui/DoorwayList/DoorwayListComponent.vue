
<template lang="pug">
.doorway_list_wrapper
    .doorway_list_item(v-for="(doorway,index) in store.getDoorwayList" :key="doorway.id")
        p # {{index}}
        p Ширина: {{doorway.width}}
        p Высота: {{doorway.height}}
        BaseButton(@click="deleteDoorway(index)") Удалить
</template>

<script>
import { BaseButton } from '@/shared/ui/BaseButton';
import { useDoorwayStore } from '../../model/doorways';
    export default {
        components: { BaseButton},
        setup() {
            const store = useDoorwayStore()
            return { store }
        },
        methods: {
            deleteDoorway(idx){
                this.store.deleteDoorway(idx)
            }
        }
    }
</script>

<style lang="scss" scoped>
.doorway_list_wrapper{
    .doorway_list_item{
        display: flex;
        align-items: center;
        p{
            margin-right: 15px;
        }
    }
}
</style>