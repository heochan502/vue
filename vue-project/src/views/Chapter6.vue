<script setup>
import { reactive, computed } from 'vue';

//반응형 상태
const state = reactive({
  mvpId: 7,
  players: [
    { id: 7, name: 'John Doe' },
    { id: 9, name: 'Jane Lee' },
    { id: 12, name: 'James Park' },
  ],
});

const getMvpName = () => {
  // java script 는 아래 처럼 해도 됨 0 이 false 로 인식
  // java는 boolean 으로 해야 가능함
  if (state.mvpId) {
    const player = state.players.find((item) => item.id === state.mvpId);

    if (player) {
      return player.name;
    }
  }
  return '없음';
};

const getMvpNameNice = () => {
  // const players = state.players.find((item) => item.id === state.mvpId)?.name || '없음';
  // return players;
  console.log('getMvpNameNice 메소드!');
  return state.players.find((item) => item.id === state.mvpId)?.name || '없음';
};

// 컴퓨티드 호출하면서 데이터 넣을 수없다 

const compytedMvpName = computed(() => {
  console.log('computedMvpName 컴퓨티드!');
  return state.players.find((item) => item.id === state.mvpId)?.name || '없음';
});
</script>

<template>
  <h1>Chapter6.vue</h1>
  <h1>오늘의 MVP</h1>
  <template v-if="state.mvpId">
    <!-- 아래는 find 안의 콜백함수를 사용해서 true 반환할때 까지 사용 
     아래 ?는 Optional Chaining undefine 나 null 뜨면 아무것도 실행 하지 않겟다. -->
    {{ state.players.find((item) => item.id === state.mvpId)?.name || '없음' }}
  </template>
  <div>{{ getMvpName() }}</div>
  <div>{{ getMvpNameNice() }}</div>
  <div>{{ getMvpNameNice() }}</div>
  <div>{{ compytedMvpName }}</div>
  <div>{{ compytedMvpName }}</div>
</template>

<style scoped></style>
