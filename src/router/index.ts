import { createWebHashHistory, createRouter } from "vue-router";

let localUser;

const routes = [
  {
    path: '/',
    name: 'analyzer',
    component: () => import('../views/AnalyzerView.vue')
  },
  {
    path: '/vibrometr',
    name: 'vibrometr',
    component: () => import('../views/VibromertView.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
