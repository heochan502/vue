<script setup>
import { onMounted, onUpdated, onUnmounted, reactive } from 'vue';

// 화면에 그려질 때 딱 한번만 호출된다.
// 즉, 화면에 그려질 때 작업하고 싶은 내용이 있으면
//onMounted 콜백 함수에 작성하면 된다.

onMounted(() => {
  console.log('컴포넌트가 마운트 됐다.');
});
const state = reactive({
  message: 'Hello!',
});

// 먼가 화면이나 속성에 수정이 있으면 onUpdated가 호출되고 사용된다
onUpdated(() => {
  console.log('속성값이 변경되었다면!', state.message);
});

// 화면에서 사라질떄 뷰가 사용되어진다
onUnmounted(() => {
  alert('나가유');
});
</script>

<template>
  <h1>Chapter8.vue</h1>
  <div>{{ state.message }}</div>
  <div>
    <!-- 여기서 뭔가 수정만 되어도 화면에 hook이 발동하여서 위에 onUpdated가 진행됨  -->
    <input type="text" v-model="state.message" />
  </div>
</template>

<style scoped></style>
