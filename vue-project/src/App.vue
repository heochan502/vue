<script setup></script>

<template>
  <div>
    <h1> app.vue</h1>

    <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache">mustache template</router-link>
    <routerLink to="/Chapter3"> Chapter3 </routerLink>
    
    <router-view />

    <FrontWheel />
    <FrontWheel> </FrontWheel>
    <RearWheel />
    <RearWheel></RearWheel>
  </div>
</template>

<style scoped></style>
