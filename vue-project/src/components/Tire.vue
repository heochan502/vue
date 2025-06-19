<script setup>
// props 외부에서 들어오는 데이터
const props = defineProps({
  color: String, // 타입 지정
});
</script>

<template>
  <!-- :style 이것은 vue 문법 
        {{  }} <중괄화 두개 겹쳐져 있는 것은 콧수염(Mustache) 표현식 
           {{  }} template(HTML)안에서 상수 혹은 변수에 담겨있는 값(Value)를 표시할 때 사용
              {{ props.color || 'black' }}
               style 앞에 : 이거 붙이는 순간 객체를 쓸수있고 없으면 문자열만 가능하다-->
  <div :style="{ color: props.color }">{{ props.color || 'black' }} TIRE</div>
  <div style="background-color: antiquewhite">
    {{ props.color || 'black' }} TIRE
  </div>
</template>

<style scoped></style>
