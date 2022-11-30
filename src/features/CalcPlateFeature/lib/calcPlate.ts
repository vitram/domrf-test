import { defaultPlate } from "@/entities/PlateEntity/model"
import { useWallStore } from "@/entities/WallEntity/model/walls";
import { useDoorwayStore } from '../../../entities/DoorwayEntity/model/doorways';
import { useResultStore } from '../../../entities/ResultEntity/model/result';

export const calcPlate = function() {
    const wall = useWallStore().getWall // метры
    const doorways = useDoorwayStore().getDoorwayList // сантиметры - к ним приводим
    const plate = defaultPlate // мелиметры

    const resultStore = useResultStore()

    if(wall && doorways && plate){
        let wallSq = 0
        let doorwaysSq = 0
        let plateSq = 0

        if(wall.height && wall.width){
            wallSq = meterToSm(wall.height) * meterToSm(wall.width) // метры в см

            doorways.forEach( val => {
                const doorwaySq = val.height * val.width
                doorwaysSq = doorwaysSq + doorwaySq
            })

            plateSq = milimetrToSm(plate.height) * milimetrToSm(plate.width)

            const plateCount = Math.round((wallSq - doorwaysSq)/plateSq)
            const wallMass = plate.mas * plateCount
            resultStore.setResult({wallMass, plateCount})
        }
    }
}

function meterToSm(number: number){
    return number*100
}

function milimetrToSm(number: number){
    return number/10
}
