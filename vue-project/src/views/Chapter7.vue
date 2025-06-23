<script setup>
import { reactive } from 'vue';
const state = reactive({
  player: 'kim',
});
const state2 = {
  form: {
    id: '',
    pw: '',
  },
};
const login = () => {
  alert(state2.form.id + '님 환영합니다!');
};
</script>

<template>
  <h1>Chapter7.vue</h1>
  <h1>{{ state.player }}</h1>
  <div>
    <!-- 아래 단방향 -->
    <input type="text" :value="state.player" />
    <!-- 아래 양방향  v-model은 player 의 값이 변경된다-->
    <input type="text" v-model="state.player" />
  </div>
  <!-- @ 이벤트 바인딩  -->
  <form @submit.prevent="login">
    {{ state2.form.id }}
    <!-- placeholder 는 글자형을 표시만 해주고 데이터나 값이변경되진 않음 
  힌트같은거 데이터르르 쓰면 써진 데이터는 없어짐  -->
    <input
      type="text"
      v-model="state2.form.id"
      placeholder="보여주기만 할꺼야"
    />
    <input type="submit" value="로그인" />
  </form>
</template>

<style scoped></style>
