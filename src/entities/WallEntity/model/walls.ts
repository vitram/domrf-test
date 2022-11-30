import { defineStore } from 'pinia'
import { IWall } from './IWall'

export const useWallStore = defineStore('wall', {
    state: (): IWall => {
        return {
          height: null,
          width: null
        }
     },
    getters: {
        getWall: (state) => state
    },
    actions: {
        setWallH(height: number) {
            this.height = height
        },
        setWallW(width: number) {
            this.width = width
        }
    },
})