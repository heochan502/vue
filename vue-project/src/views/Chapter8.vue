<script setup>
import { onMounted ,onUpdated} from 'vue';

// 화면에 그려질 때 딱 한번만 호출된다. 
// 즉, 화면에 그려질 때 작업하고 싶은 내용이 있으면
//onMounted 콜백 함수에 작성하면 된다. 


onMounted(() => {
  console.log('컴포넌트가 마운트 됐다.');
});
</script>

<template>
  <h1>Chapter8.vue</h1>
</template>

<style scoped></style>
