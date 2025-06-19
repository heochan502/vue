<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
</script>

<template>
  <h1>Hello Vue!</h1>
  <h1>Hello Vue!</h1>
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
