<script setup>
// 아래는 뷰에서 받은 함수를 객체로 치환해서 쓰겟다
import { ref } from 'vue';
const fruits = 'apple avocado';
const fruitsArr = ['banana', 'blueberry'];

const changeVisible = () => {
  visible.value.fruit = !visible.value.fruit;
};

//아래는 각각의 객체라서 true 면 클래스 명이 들어가고
// false 면 클래스 명이 들어가지 않는다
// 그래서 아래를 조정 해서 각 클래스를 생성하고 빠지고해서 style이나 그런게 안들어가게 할수도있다
// 아래 pointer는 main css 에서 pointer 이라는걸 만들어서 추가한거 임
// 버튼 쪽에 마우스 올리면 손모양으로 변경됨
// const visible = ref({ fruit: true, pointer : true });
const visible = ref({ fruit: true });
const hidden = { fruit: false };

const rect = 'background-color: red; width: 200px; height: 100px;';
const rectObj = {
  backgroundColor: 'red',
  width: '200px',
  height: '100px',
};
rectObj.backgroundColor = 'blue';

let loading = true;
</script>

<template>
  <h1>Chapter3.vue</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitsArr" :title="fruitsArr">바나나 / 블루베리</div>
  <hr />
  <!-- 위에서 visible에 pointer 안넣고 아래에 강제로 pointer을 넣을 수 있다. -->
  <div :class="visible" class="pointer" @click="changeVisible">
    사과{{ visible.fruit }}
  </div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <hr />
  <div :style="rectObj">rectObj</div>
  <div v-if="loading">로딩 중!!!</div>
  <!-- 같은 레벨에 v-if / v-else 가 있어야 한다 세트로 존재해야하고 중간에 다른게 끼이면 오류 뜸 -->
  <!-- 아래는 리엑트 문법 -->
  <!-- <div v-if="!loading">로딩 끝!!!</div> -->
  <!-- 아래는 뷰 문법 -->
  <div v-else>로딩 끝!!!</div>

  <!-- v-show true 일떄만 화면 표출 위에 if 랑 차이점은 태그는 소스상에 존재한다 
   v-if 는 조건이 안맞으면 아에 문서에서 태그가 빠진다  
   v-if는 프로그램상에서 아에 판별 하고 선처리-->
  <div v-show="loading">show loading</div>
</template>

<style scoped>
.fruit {
  color: red;
}
</style>
