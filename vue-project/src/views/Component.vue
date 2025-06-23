<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
import { useCounterStore } from '@/stores/counter.js';
const counterStore = useCounterStore();
</script>

<template>
  <h1>Hello Vue!</h1>
  <h1>Hello Vue!</h1>
  <button @click="counterStore.increment">회전</button>
  <div class="car">
    <FrontWheel></FrontWheel>
    <FrontWheel />
  </div>
  <div class="car">
    <RearWheel></RearWheel>

    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
