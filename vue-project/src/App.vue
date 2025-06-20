<script setup>
import FrontWheel from './components/FrontWheel.vue';
import RearWheel from './components/RearWheel.vue';
</script>

<template>
  <div>
    <h1>app.vue</h1>

    <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache">mustache template</router-link>
    <router-link to="/Chapter3"> Chapter3 </router-link>

    <router-view />
    <!-- 
    <FrontWheel />
    <FrontWheel> </FrontWheel>
    <RearWheel />
    <RearWheel></RearWheel> -->
  </div>
</template>

<style scoped></style>
