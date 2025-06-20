<script setup>
const fruit = ['apple', 'banana', 'pear'];
const parent = 'fruit';
const sports = [
  {
    id: 1,
    name: '농구',
  },
  {
    id: 2,
    name: '축구',
  },
  {
    id: 3,
    name: '배구',
  },
];

const pop = (message) => alert(message);
const pop2 = () => alert('파라미터 없음');
</script>

<template>
  <h1>Chapter4.vue</h1>
  <div :class="parent" :key="idx" v-for="(item, idx) in fruit">
    {{ idx + 1 + '.' + item }}
    <!-- {{ idx + 1 }}. {{item}} -->
  </div>

  <select>
    <!-- 내부적으로 key 값이 있어야 for문이 정상적으로 돌아간다 리액트든 뷰든 똑같다 -->
    <option :key="item.id" v-for="item in sports" :value="item.id">
      {{ item.name }}
    </option>

    <!-- <option value="1">농구</option>
    <option value="2">축구</option>
    <option value="3">배구</option> -->
  </select>
  <!-- 아래는 자바 스크립트였으면 바로 alert 실행되서 창 떳음
   아래는 on 태그로 클릭 하면 pop이 뜨도록 만든거  
   아래처럼 버튼으로 눌렀을 때만 실행 되게 하는
   v-on 대신에 @ <- 이걸로 퉁칠수 있음
   pop뒤에 위에 메시지 받도록 하면 받은 메시지로 출력한다-->
  <button @:click="pop('반가워22')">Hello pop</button>
  <button v-on:click="pop2">Hello pop</button>
</template>

<style scoped></style>
