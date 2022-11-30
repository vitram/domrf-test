import { defineStore } from 'pinia'
import { IDoorway } from './doorway.interface';

export const useDoorwayStore = defineStore('doorway', {
    state: () => {
        return {
          doorwayList: [] as IDoorway[],
        }
     },
    getters: {
        getDoorwayList: (state) => state.doorwayList
    },
    actions: {
        addDoorway(doorway : IDoorway): void {
            
            this.doorwayList.push(doorway)
        },
        deleteDoorway(idx: number) {
            if (idx > -1) {
                this.doorwayList.splice(idx, 1);
            }
        }
    },
})
  