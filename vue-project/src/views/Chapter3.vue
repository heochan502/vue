<script setup>
import { ref } from 'vue';
const fruits = 'apple avocado';
const fruitsArr = ['banana', 'blueberry'];

const changeVisible = () => {
  visible.value.fruit = !visible.value.fruit;
};

//아래는 각각의 객체라서 true 면 클래스 명이 들어가고
// false 면 클래스 명이 들어가지 않는다
// 그래서 아래를 조정 해서 각 클래스를 생성하고 빠지고해서 style이나 그런게 안들어가게 할수도있다
const visible = ref({ fruit: true });
const hidden = { fruit: false };
</script>

<template>
  <h1>Chapter3.vue</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitsArr" :title="fruitsArr">바나나 / 블루베리</div>
  <hr />
  <div :class="visible" @click="changeVisible">사과{{ visible.fruit }}</div>
  <div :class="hidden">오이</div>
</template>

<style scoped>
.fruit {
  color: red;
}
</style>
