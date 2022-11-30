import { defineStore } from 'pinia'
import { IResult } from './result.interface'

export const useResultStore = defineStore('result', {
    state: (): IResult => {
        return {
            plateCount: null,
            wallMass: null
        }
     },
    getters: {
        getResult: (state) => state
    },
    actions: {
        setResult(result: IResult) {
            this.plateCount = result.plateCount
            this.wallMass = result.wallMass
        },
    },
})