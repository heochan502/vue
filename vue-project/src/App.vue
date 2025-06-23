<script setup>
import FrontWheel from './components/FrontWheel.vue';
import RearWheel from './components/RearWheel.vue';
</script>

<template>
  <div>
    <h1>app.vue</h1>
<!-- 아래는 링크를 주고 링크를 박는 형식이고 이름 말고 변수에 이름 지정해서 넘길수도있다
 하지만 path로 하는걸 추천  -->
    <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache">mustache template</router-link>
    <router-link to="/Chapter3"> Chapter3 </router-link>
    <router-link to="/Chapter4"> Chapter4 </router-link>
    <router-link to="/Chapter5"> 반응형 상태 </router-link>
    <router-link to="/Chapter6"> 컴퓨티드 </router-link>
    <router-link to="/Chapter7"> 데이터 바인딩 </router-link>
    <router-link to="/Chapter8"> 훅 Hook </router-link>
<!-- 아래에 마운트가 되는형식  router-view 이게 있어야함  -->
    <router-view />
    <!-- 
    <FrontWheel />
    <FrontWheel> </FrontWheel>
    <RearWheel />
    <RearWheel></RearWheel> -->
  </div>
</template>

<style scoped></style>
