<script setup>
// 아래는 반응형 쓰겟다
import { ref, reactive, nextTick } from 'vue';

//  ref 반응형 상태 라고함

const pushUp = ref(0); // rref 메소드는 반응형 상태 객체 주소값을 리턴, 초기값을 value 속성에 저장

const increasePushUp = () => {
  // 아래와 같이 표시해야 ref가 작동함
  pushUp.value++;
  // 아래는 거의 안씀
  // nextTick(() => {
  //   console.log(document.querySelector('#pushUp').innerText);
  // });
  console.log('푸시업 이벤트 발생!', pushUp.value);
};

const state = reactive({
  sitUp: 0, // 윗몸 일으키기 개수
});

const increaseSitsUp = () => {
  state.sitUp++;
  console.log('싯업 이벤트 발생', state.sitUp);
};
</script>

<template>
  <h1>Chapter5.vue - 반응형 상태</h1>
  <hr />
  <div id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</div>
  <div id="sitUp">윗몸 일으키기 증가 : {{ state.sitUp }}</div>
  <hr />

  <button @click="increasePushUp">팔 굽혀 펴기 증가</button>
  <button @click="increaseSitsUp">윗몸 일으키기 증가</button>
</template>

<style scoped></style>

<!-- 아래는 자바 스크립트였으면 바로 alert 실행되서 창 떳음
   아래는 on 태그로 클릭 하면 pop이 뜨도록 만든거  
   아래처럼 버튼으로 눌렀을 때만 실행 되게 하는
   v-on 대신에 @ <- 이걸로 퉁칠수 있음
   pop뒤에 위에 메시지 받도록 하면 받은 메시지로 출력한다-->
<!-- <button @:click="pop('반가워22')">Hello pop</button>
   <button v-on:click="pop2">Hello pop</button> -->
