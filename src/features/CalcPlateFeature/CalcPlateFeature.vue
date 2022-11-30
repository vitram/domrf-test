<template lang='pug'>
.calc_wrapper
    h3 Калькулятор пазогребневых плит
    .calc_section
        h4 Размер стены
        WallEntityComponent
    .calc_section
        h4 Дверные проемы
        DoorwayAddComponent
        DoorwayListComponent
    BaseButton.result_btn(@click="calcWall") Рассчитать ПГП
    .calc_section
        h4 Результат
        ResultEntityComponent 
</template>

<script>
import calcPlate from './lib';
import { BaseButton } from '@/shared/ui/BaseButton';
import { BaseInput } from '@/shared/ui/BaseInput';

import WallEntityComponent from '@/entities/WallEntity/ui';
import DoorwayAddComponent from '@/entities/DoorwayEntity/ui/DoorwayAdd/index';
import DoorwayListComponent from '@/entities/DoorwayEntity/ui/DoorwayList/index';
import ResultEntityComponent from '@/entities/ResultEntity/ui/index';

    export default {

    components: { BaseButton, BaseInput, WallEntityComponent,DoorwayAddComponent, DoorwayListComponent, ResultEntityComponent },
    methods: {
        calcWall(){
            calcPlate()
        }
    }
}
</script>

<style lang="scss" scoped>
.calc_wrapper{
    background-color: $card-bg-color;
    border-radius: $border-radius;
    padding: 2rem;
    .calc_section{
        margin-top: 20px;
    }
    .result_btn{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}
</style>