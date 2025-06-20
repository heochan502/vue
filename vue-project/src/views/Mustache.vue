<script setup>
const message = 'There';
const messageObj = { name: 'Kim', age: 20 };
const pageId = 'history';
let loading = false;
const parent = 'fruits';
const child = 'item';
const fruitList = ['사과', '바나나', '딸기', '배'];

// console.log(messageObj); // 이걸하면 값이 다잘나오는데/ 객체에서 객체 요소를 출력 하라는거라서
// console.log(messageObj.toString()); // 이걸하면 객체의 주소값을 줘버린다 객체 자체를 표현어떻게 하냐가 되어서
</script>

<template>
  <h1>mustache.vue</h1>
  <div>Hello, {{ message }}</div>
  <!-- v-text는 directive '디렉티브'라고 부른다.
     v- 시작하는 속성은 전부 디렉티브이다.-->
  <div>Hello, <span v-text="message"></span></div>
  <!-- 위는 객체자체를 표현하는 방법을 출력하기 떄문에 객체 이름이 출력됨 -->
  <div>Hello, messageObj <span v-text="messageObj"></span></div>
  <!-- 객체의 값을 쓸려면 아래 처럼 써야한다 -->
  <div>Hello, messageObj.name <span v-text="messageObj.name"></span></div>
  <!-- id에 들어가는 값은 history  -->
  <div v-bind:id="pageId">페이지 아이디 div1</div>
  <!-- v-bind 생략가능  // : 이게 나오면  -->
  <div :id="pageId">페이지 아이디 div2</div>

  <input type="text" placeholder="아이디" :readonly="loading" />
  <input type="password" placeholder="비밀번호" :readonly="loading" />
  <button :disabled="loading">로그인</button>
  <ul :class="parent">
    <li :key="idx" v-for="(item, idx) in fruitList" :class="child">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
#history {
  color: red;
}
</style>
