<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
</script>

<template>
  <div>
    <h1 class="front-wheel">Hello Vue!</h1>
    <h1>Hello Vue!</h1>

    <FrontWheel></FrontWheel>
    <RearWheel></RearWheel>
    <div class="car">
      <FrontWheel />
      <RearWheel />
      
    </div>

    <!-- <FrontWheel />
    <FrontWheel> </FrontWheel>
    <RearWheel />
    <RearWheel></RearWheel> -->
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
