import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchStore = defineStore('switch', () => {
    const exibelogin = ref(true)

    const  toggle = () =>{
      exibelogin.value = !exibelogin.value
    }

  return { exibelogin, toggle }
})
