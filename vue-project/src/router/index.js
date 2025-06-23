import { createRouter, createWebHistory } from 'vue-router';
import Mustache from '@/views/Mustache.vue';
import Component from '@/views/Component.vue';
import Chapter3 from '@/views/Chapter3.vue';
import Chapter4 from '@/views/Chapter4.vue';
import Chapter5 from '@/views/Chapter5.vue';
// import Chapter6 from '@/views/Chapter6.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component',
      component: Component,
    },

    {
      path: '/mustache',
      component: Mustache,
    },
    {
      // path는 app.vue 에 link to
      path: '/Chapter3',
      // 컴포넌트 뒤에는 위에 import 명
      component: Chapter3,
    },
    {
      // path는 app.vue 에 link to
      path: '/Chapter4',
      // 컴포넌트 뒤에는 위에 import 명
      component: Chapter4,
    },
    {
      // path는 app.vue 에 link to
      path: '/Chapter5',
      // 컴포넌트 뒤에는 위에 import 명
      component: Chapter5,
    },
    {
      // path는 app.vue 에 link to
      path: '/Chapter6',
      // 컴포넌트 뒤에는 위에 import 명
      component: () => import('@/views/Chapter6.vue'),
    },
    {
      // path는 app.vue 에 link to
      path: '/Chapter7',
      // 컴포넌트 뒤에는 위에 import 명
      component: () => import('@/views/Chapter7.vue'),
    },
    {
      // path는 app.vue 에 link to
      path: '/Chapter8',
      // 컴포넌트 뒤에는 위에 import 명
      component: () => import('@/views/Chapter8.vue'),
    },
  ],
});

export default router;
