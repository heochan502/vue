<script setup>
// props 외부에서 들어오는 데이터
const props = defineProps({
  color: String, // 타입 지정
});
</script>

<template>
  <!-- :style 이것은 vue 문법 
        {{  }} <중괄화 두개 겹쳐져 있는 것은 콧수염(Mustache) 표현식 -->
  <div :style="{ color: props.color }">
    {{ props.color || 'black' }}BLACK TIRE
  </div>
</template>

<style scoped></style>
