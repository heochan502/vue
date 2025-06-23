import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//counter.js를 사용하면 전달하는 데이터나 값을 export로 해서 시작한다
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
