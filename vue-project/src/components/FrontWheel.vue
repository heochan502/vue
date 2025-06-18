<script setup>
import Tire from './Tire.vue';
</script>

<template>
  <div class="front-wheel">
    <span>FRONT WHEEL</span>
    <Tire />
  </div>
</template>

<!--  아래에 .front-wheel을 적어도 이파일안에 여기 로컬하게만 적용된다-->
<!-- scoped 떄문에 여기 컴포넌트에서만 적용된다 -->
<style scoped>
.front-wheel {
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
